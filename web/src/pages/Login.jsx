import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Users, Calendar, ClipboardCheck } from 'lucide-react';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Login() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/auth/user', { withCredentials: true })
      .then(res => {
        setUser(res.data);
        if (res.data) {
          navigate('/');
        }
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/github';
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#f4f5fa]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f4f5fa] to-[#e8eaf6] p-4">
      <div className="max-w-md w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">TeamHub</h1>
          <p className="text-gray-600">College Team Management System</p>
        </div>

        {/* Login Card */}
        <div className="bg-white shadow-neumorph px-8 py-10 rounded-3xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Welcome Back</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sign in with your GitHub account to access team projects, 
              schedule meetings, and manage tasks
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center p-3 bg-purple-50 rounded-xl">
              <Calendar className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Schedule Meetings</p>
            </div>
            <div className="text-center p-3 bg-pink-50 rounded-xl">
              <ClipboardCheck className="w-6 h-6 text-pink-500 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Track Tasks</p>
            </div>
          </div>

          {/* Login Button */}
          <button 
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-3"
          >
            <Github className="w-5 h-5" />
            Continue with GitHub
          </button>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              By signing in, you agree to our team collaboration guidelines
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Made for college teams • Secure & Fast
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
