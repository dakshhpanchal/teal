import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Users } from 'lucide-react';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'radial-gradient(circle at top left, #f4f5fa, #e8eaf6)',
    padding: '16px'
  },
  loginBox: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#f4f5fa',
    borderRadius: '24px',
    padding: '32px',
    boxShadow: '10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff',
    transition: 'all 0.3s ease'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: 'linear-gradient(to right, teal, #EDDD53)',
    color: 'white',
    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
    margin: '0 auto 16px'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: '8px'
  },
  subtitle: {
    fontSize: '0.875rem',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '32px'
  },
  button: {
    width: '100%',
    background: 'linear-gradient(to right, teal, #EDDD53)',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    transition: 'all 0.2s ease'
  },
  buttonHover: {
    transform: 'scale(1.03)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
  },
  footer: {
    fontSize: '0.75rem',
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: '24px'
  }
};

function Login() {
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Logging in with GitHub');
    window.location.href = 'http://localhost:5000/auth/github';
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <div style={styles.logo}>
          <Users size={28} />
        </div>
        
        <h1 style={styles.title}>Teal</h1>
        <p style={styles.subtitle}>UGV's inhouse management app</p>
        
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
            Welcome Back
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            Sign in with GitHub to manage projects and tasks
          </p>
        </div>

        <button
          onClick={handleLogin}
          style={{ ...styles.button, ...(isHovered ? styles.buttonHover : {}) }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Github size={20} />
          Continue with GitHub
        </button>

        <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', marginTop: '24px' }}>
          By signing in, you agree to our team collaboration guidelines
        </p>
      </div>

      <p style={styles.footer}>
        Made for UGV DTU • Secure(Maybe) & Fast
      </p>
    </div>
  );
}

export default Login;
