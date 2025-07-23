import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/auth/user`)
      .then(res => setUser(res.data))
      .catch(() => navigate('/login'));
  }, [navigate]);

  if (!user) return null; // or loading state

  return (
    <div className="dashboard">
      <div className="card">
        <img className="avatar" src={user.photos?.[0]?.value || '/avatar.png'} alt="User avatar" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p className="role-tag">{user.role?.toUpperCase()}</p>
        <button className="logout-btn" onClick={() => {
          axios.get(`http://localhost:5000/auth/logout`)
            .then(() => navigate('/login'))
            .catch(console.error);
        }}>Logout</button>
      </div>
    </div>
  );
}

