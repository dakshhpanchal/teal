import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust based on backend port
  withCredentials: true, // Ensures cookies are sent (for session handling)
});

export default api;

