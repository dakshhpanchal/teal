import React, { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/auth/user')
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/github'; // Redirect to GitHub login
  };

  const handleLogout = () => {
    axios.get('http://server:5000/auth/logout')
      .then(() => setUser(null))
      .catch(console.error);
  };

  return (
    <div className="login-container">
      {user ? (
        <div className="user-card">
          <img src={user.photos?.[0]?.value} alt="avatar" className="avatar" />
          <h2>Welcome, {user.name || user.username}</h2>
          <p>{user.email}</p>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button className="login-btn" onClick={handleLogin}>
          Login with GitHub
        </button>
      )}
    </div>
  );
}

export default Login;
