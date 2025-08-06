require('dotenv').config({path: __dirname + '/../.env'});
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const db = require('./db');

const app = express();

app.use(express.json());

app.use(cors({
    origin: ['http://localhost:5173', 'http://web:5173'],
    methods: ['GET', 'POST', 'PUT', 'HEAD'],
    credentials: true
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'lax'
    }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log(profile)
        const githubId = profile.id;
        const username = profile.username;
        const name = profile.displayName || username;
        const email = profile.emails?.[0]?.value || null;
        const avatarUrl = profile.photos?.[0]?.value || null;
        const profileUrl = profile.profileUrl;

        const existing = await db.query('SELECT * FROM users WHERE github_id = $1', [githubId]);
        if (existing.rows.length > 0) return done(null, existing.rows[0]);

        const insert = await db.query(`
            INSERT INTO users (github_id, username, name, email, avatar_url, profile_url, role)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
        `, [githubId, username, name, email, avatarUrl, profileUrl, 'member']);

        return done(null, insert.rows[0]);
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
    try {
        const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        done(null, result.rows[0]);
    } catch (err) {
        done(err);
    }
});

app.get('/auth/github', passport.authenticate('github', {scope: ['user:email']}));

app.get('/auth/github/callback',
    passport.authenticate('github', {failureRedirect: '/'}),
    (req, res) => {
        res.redirect('http://localhost:5173');
    }
);

app.get('/auth/user', (req, res) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.status(401).json({error: 'Not logged in'});
    }
});

app.get('/auth/logout', (req, res) => {
    req.logout(err => {
        if (err) return res.status(500).json({error: 'Logout failed'});
        res.clearCookie('connect.sid');
        res.json({message: 'Logged out successfully'});
    });
});

app.get('/', (req, res) => {
  res.send('Server is working!');
});

app.put('/auth/profile', async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  const {
    name,
    email,
    phone,
    rollNumber,
    branch,
    year,
    position,
    bio,
    skills,
    socialLinks
  } = req.body;

  try {
    const updated = await db.query(`
      UPDATE users SET
        name = $1,
        email = $2,
        phone = $3,
        roll_number = $4,
        branch = $5,
        year = $6,
        position = $7,
        bio = $8,
        skills = $9,
        social_links = $10,
        updated_at = NOW()
      WHERE id = $11
      RETURNING *
    `, [
      name,
      email,
      phone || null,
      rollNumber || null,
      branch || null,
      year ? parseInt(year) : null,
      position || 'Member',
      bio || null,
      Array.isArray(skills) ? skills : skills?.split(',').map(s => s.trim()) || [],
      socialLinks || {},
      req.user.id
    ]);

    res.status(200).json(updated.rows[0]);
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

app.listen(5000, () => console.log('Server running at http://localhost:5000'));


