import Sidebar from './components/layout/Sidebar.jsx';
import Header from './components/layout/Header.jsx';
import AppRoutes from './router/AppRoutes.jsx';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <AppRoutes />
      </div>
    </div>
  );
}

