import React from 'react';
import { Home, Bell, Calendar, Users, UserCheck, Image, ChevronRight } from 'lucide-react';
// Import your SAInT logo
import saintLogo from '../assets/images/saint-logo.png';

const Sidebar = ({ activeSection, onSectionChange }) => {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'updates', label: 'Updates', icon: Bell, badge: '1' },
    { id: 'activities', label: 'Activities', icon: Calendar },
    { id: 'clubs', label: 'Clubs', icon: Users },
    { id: 'members', label: 'Members', icon: UserCheck },
    { id: 'gallery', label: 'Gallery', icon: Image }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-800 to-blue-900 text-white h-screen w-64 fixed left-0 top-0 shadow-2xl">
      {/* SAInT Logo Section with Image */}
      <div className="p-6 border-b border-blue-700">
        <div className="flex items-center space-x-3">
          {/* Image Logo */}
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <img 
              src={saintLogo} 
              alt="SAInT Logo" 
              className="w-10 h-10 object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback text logo (hidden by default) */}
            <span className="text-xl font-bold text-blue-600 hidden">SAInT</span>
          </div>
          <div>
            <h2 className="text-xl font-bold">SAInT</h2>
            <p className="text-blue-200 text-sm">Student Association</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="mt-8">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center justify-between px-6 py-4 transition-all duration-200 group ${
                isActive 
                  ? 'bg-blue-600 border-r-4 border-white shadow-lg' 
                  : 'hover:bg-blue-700 hover:pl-8'
              }`}
            >
              <div className="flex items-center space-x-4">
                <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-blue-200'}`} />
                <span className={`font-medium ${isActive ? 'text-white' : 'text-blue-100'}`}>
                  {item.label}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                  isActive ? 'rotate-90 text-white' : 'text-blue-300 group-hover:translate-x-1'
                }`} />
              </div>
            </button>
          );
        })}
      </nav>

      {/* Footer Section */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-blue-700 rounded-lg p-4 text-center">
          <p className="text-blue-200 text-sm">Information Technology</p>
          <p className="text-white font-semibold">Student Hub</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;