import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Tasks from '../pages/Tasks';
import Notifications from '../pages/Notifications';
import Projects from '../pages/Projects';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default AppRoutes;

