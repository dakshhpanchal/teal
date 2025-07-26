import { NavLink } from 'react-router-dom';
import { Home, Folder, ClipboardList, Bell, Settings, Users } from 'lucide-react';

const styles = {
  sidebar: {
    width: '80px',
    background: 'linear-gradient(145deg, #e0e0e5, #ffffff)',
    boxShadow: '10px 10px 30px #d1d1d6, -10px -10px 30px #ffffff',
    borderRadius: '20px',
    padding: '20px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    marginBottom: '32px'
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    transition: 'all 0.2s ease',
    margin: '16px 0',
    color: '#6b7280'
  },
  activeNavItem: {
    backgroundColor: '#f3e8ff',
    color: '#8b5cf6',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  }
};

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.logo}>
        <Users size={20} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => 
            isActive ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem
          }
          title="Dashboard"
        >
          <Home size={20} />
        </NavLink>

        <NavLink 
          to="/projects" 
          style={({ isActive }) => 
            isActive ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem
          }
          title="Projects"
        >
          <Folder size={20} />
        </NavLink>

        <NavLink 
          to="/tasks" 
          style={({ isActive }) => 
            isActive ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem
          }
          title="Tasks"
        >
          <ClipboardList size={20} />
        </NavLink>

        <NavLink 
          to="/notifications" 
          style={({ isActive }) => 
            isActive ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem
          }
          title="Notifications"
        >
          <Bell size={20} />
        </NavLink>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <NavLink 
          to="/settings" 
          style={({ isActive }) => 
            isActive ? { 
              ...styles.navItem, 
              backgroundColor: '#f3f4f6',
              color: '#374151'
            } : styles.navItem
          }
          title="Settings"
        >
          <Settings size={20} />
        </NavLink>
      </div>
    </aside>
  );
}
