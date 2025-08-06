import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/auth/user', { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(err => {
        console.error('User fetch failed:', err);
        setUser(null);
      })
      .finally(() => setLoadingUser(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}
