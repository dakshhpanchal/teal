import React, { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/auth/user', { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/github';
  };

  const handleLogout = () => {
    axios.get('http://localhost:5000/auth/logout')
      .then(() => setUser(null))
      .catch(console.error);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#f4f5fa]">
      {user ? (
        <div className="bg-gradient-to-br from-white to-[#f0f0f5] shadow-neumorph px-10 py-8 rounded-3xl text-center space-y-6 w-[350px]">
          <img src={user.photos?.[0]?.value} alt="avatar" className="w-24 h-24 rounded-full mx-auto shadow-lg hover:scale-105 transition" />
          <h2 className="text-2xl font-semibold text-gray-700">Welcome, {user.name || user.username}</h2>
          <p className="text-gray-500">{user.email}</p>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl shadow-md transition">
            Logout
          </button>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-white to-[#f0f0f5] shadow-neumorph px-10 py-8 rounded-3xl text-center space-y-6 w-[350px]">
          <h2 className="text-2xl font-semibold text-gray-700">TeamHub Login</h2>
          <p className="text-gray-500 text-sm">Please login using your GitHub account to continue</p>
          <button onClick={handleLogin} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl text-lg shadow-md hover:scale-105 transition">
            Login with GitHub
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
