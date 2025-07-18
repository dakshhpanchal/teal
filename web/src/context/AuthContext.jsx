import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);     // Stores GitHub user data
  const [loading, setLoading] = useState(true); // Indicates if we're still checking login

  // Called when app loads to check if user is already logged in
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/auth/me'); // Backend should return GitHub profile
        setUser(res.data);
      } catch (err) {
        setUser(null); // Not logged in
      } finally {
        setLoading(false); // Done loading
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔁 useAuth hook
export const useAuth = () => useContext(AuthContext);

