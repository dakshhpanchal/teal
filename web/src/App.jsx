import Sidebar from './components/layout/Sidebar.jsx';
import AppRoutes from './router/AppRoutes.jsx';

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <AppRoutes />
      </div>
    </div>
  );
}
