import { useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar.jsx';
import AppRoutes from './router/AppRoutes.jsx';

const styles = {
  layout: {
    display: 'flex',
    height: '100vh'
  },
  main: {
    flex: 1,
    padding: '2rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column'
  }
};

export default function App() {
  const location = useLocation();
  const hideSidebar = location.pathname === '/login';

  return (
    <div style={hideSidebar ? {} : styles.layout}>
      {!hideSidebar && <Sidebar />}
      <div style={styles.main}>
        <AppRoutes />
      </div>
    </div>
  );
}
