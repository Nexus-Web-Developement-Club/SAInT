import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Bell, Activity, Users, UserCheck, Camera } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'updates', label: 'Updates', icon: Bell, path: '/updates' },
    { id: 'activities', label: 'Activities', icon: Activity, path: '/activities' },
    { id: 'clubs', label: 'Clubs', icon: Users, path: '/clubs' },
    { id: 'members', label: 'Members', icon: UserCheck, path: '/members' },
    { id: 'gallery', label: 'Gallery', icon: Camera, path: '/gallery' },
  ];

  return (
    <div className="w-72 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 min-h-screen shadow-2xl sticky top-0 left-0">
      {/* Logo section omitted for brevity */}

      <nav className="mt-8 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center p-4 mb-2 rounded-2xl transition ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-white shadow-lg'
                    : 'text-blue-200 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <Icon className="w-5 h-5 mr-4" />
              <span className="font-semibold text-lg">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
