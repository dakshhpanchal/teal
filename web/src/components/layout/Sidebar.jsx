import { NavLink } from 'react-router-dom';
import { Home, Folder, ClipboardList, Bell } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="flex items-center justify-center w-12 h-12 mb-6 rounded-xl hover:bg-purple-100">
        <Home />
      </NavLink>
      <NavLink to="/projects" className="flex items-center justify-center w-12 h-12 mb-6 rounded-xl hover:bg-purple-100">
        <Folder />
      </NavLink>
      <NavLink to="/tasks" className="flex items-center justify-center w-12 h-12 mb-6 rounded-xl hover:bg-purple-100">
        <ClipboardList />
      </NavLink>
      <NavLink to="/notifications" className="flex items-center justify-center w-12 h-12 mb-6 rounded-xl hover:bg-purple-100">
        <Bell />
      </NavLink>
    </aside>
  );
}
