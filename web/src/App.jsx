import { useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar.jsx';
import AppRoutes from './router/AppRoutes.jsx';

export default function App() {
  const location = useLocation();
  const hideSidebar = location.pathname === '/login';

  return (
    <div className={hideSidebar ? '' : 'layout'}>
      {!hideSidebar && <Sidebar />}
      <div className="main">
        <AppRoutes />
      </div>
    </div>
  );
}
