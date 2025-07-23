import React, { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true; // send cookies

function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/auth/user')
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/github';
  };

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.displayName}</h2>
          <img src={user.photos?.[0]?.value} alt="avatar" />
        </>
      ) : (
        <button onClick={handleLogin}>Login with GitHub</button>
      )}
    </div>
  );
}

export default Login;
