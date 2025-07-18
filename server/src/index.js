require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const db = require('./db');
const userRoutes = require('./routes/user');
const app = express();
const notificationsRoutes = require('./routes/notifications');

// ----------------------------
// Configure Session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

//changes
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// ----------------------------
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
app.use('/notifications', notificationsRoutes);
app.use('/user', userRoutes);

// ----------------------------
// Configure GitHub Strategy
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const githubId = profile.id;
    const name = profile.displayName || profile.username;
    const email = profile.emails?.[0]?.value || null;
    const role = 'member'; // or whatever default

    // Check if user already exists
    const existing = await db.query('SELECT * FROM users WHERE github_id = $1', [githubId]);
    if (existing.rows.length > 0) {
      return done(null, existing.rows[0]);
    }

    // Insert new user
    const insert = await db.query(
      'INSERT INTO users (github_id, name, email, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [githubId, name, email, role]
    );

    return done(null, insert.rows[0]);
  } catch (err) {
    return done(err);
  }
}));

// ----------------------------
// Serialize/Deserialize User
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    done(null, result.rows[0]);
  } catch (err) {
    done(err);
  }
});
// ----------------------------
// Routes
app.get('/', (req, res) => {
  if (!req.user) return res.status(200).json({ message: 'Hello, Guest' });
  res.json({
    message: `Hello, ${req.user.name}`,
'/'    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  });
});

app.get('/auth/logout', (req, res) => {
  req.logout(() => {
    res.json({ message: 'Logged out successfully' });
  });
});

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
