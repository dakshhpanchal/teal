import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#374151'
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb'
  }
};

export default function Header({ title }) {
  const { user } = useContext(UserContext);
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>{title}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {user?.avatar_url ? (
          <img
            src={user.avatar_url}
            alt="Profile"
            style={styles.avatar}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/40';
            }}
          />
        ) : (
          <div style={styles.avatar} />
        )}
      </div>
    </header>
  );
}
