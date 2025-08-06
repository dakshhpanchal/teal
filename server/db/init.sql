DROP TABLE IF EXISTS notifications;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    github_id VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255),
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),                
    roll_number VARCHAR(50),          
    branch VARCHAR(100),              
    year INTEGER,                     
    position VARCHAR(50),             
    bio TEXT,                         
    skills TEXT[],                    
    social_links JSONB,             
    avatar_url TEXT,
    profile_url TEXT,
    github_token TEXT,
    role VARCHAR(50) DEFAULT 'member',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW()
);
