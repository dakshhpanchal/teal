import { NavLink } from 'react-router-dom';
import { Home, Folder, ClipboardList, Bell, Settings, Users, Calendar, UserCheck } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="flex items-center justify-center w-12 h-12 mb-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
        <Users className="w-6 h-6" />
      </div>

      <div className="flex flex-col items-center space-y-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${
              isActive 
                ? 'bg-purple-100 text-purple-600 shadow-md' 
                : 'text-gray-500 hover:bg-purple-50 hover:text-purple-500'
            }`
          }
          title="Dashboard"
        >
          <Home className="w-5 h-5" />
        </NavLink>

        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${
              isActive 
                ? 'bg-purple-100 text-purple-600 shadow-md' 
                : 'text-gray-500 hover:bg-purple-50 hover:text-purple-500'
            }`
          }
          title="Projects"
        >
          <Folder className="w-5 h-5" />
        </NavLink>

        <NavLink 
          to="/tasks" 
          className={({ isActive }) => 
            `flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${
              isActive 
                ? 'bg-purple-100 text-purple-600 shadow-md' 
                : 'text-gray-500 hover:bg-purple-50 hover:text-purple-500'
            }`
          }
          title="Tasks"
        >
          <ClipboardList className="w-5 h-5" />
        </NavLink>

        <NavLink 
          to="/notifications" 
          className={({ isActive }) => 
            `flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${
              isActive 
                ? 'bg-purple-100 text-purple-600 shadow-md' 
                : 'text-gray-500 hover:bg-purple-50 hover:text-purple-500'
            }`
          }
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
        </NavLink>
      </div>

      <div className="mt-auto">
        <NavLink 
          to="/settings" 
          className={({ isActive }) => 
            `flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${
              isActive 
                ? 'bg-gray-100 text-gray-700 shadow-md' 
                : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
            }`
          }
          title="Settings"
        >
          <Settings className="w-5 h-5" />
        </NavLink>
      </div>
    </aside>
  );
}
