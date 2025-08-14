import React from 'react';
import { Home, Bell, Activity, Users, UserCheck, Camera, ChevronRight } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'updates', label: 'Updates', icon: Bell, badge: '3' },
    { id: 'activities', label: 'Activities', icon: Activity },
    { id: 'clubs', label: 'Clubs', icon: Users },
    { id: 'members', label: 'Members', icon: UserCheck },
    { id: 'gallery', label: 'Gallery', icon: Camera },
  ];

  return (
    <div className="w-72 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 min-h-screen shadow-2xl relative overflow-hidden">
      <div className="w-72 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 min-h-screen shadow-2xl relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 -left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -right-10 w-32 h-32 bg-indigo-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400 rounded-full blur-xl"></div>
        </div>

        {/* Logo Section */}
        <div className="relative z-10 p-8 border-b border-white/10 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/StudentAssociation.png" 
                alt="SAInT Logo" 
                className="w-16 h-16 rounded-2xl shadow-lg ring-2 ring-white/20"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.style.display = 'flex';
                }}
              />
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-lg ring-2 ring-white/20 items-center justify-center hidden">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
            </div>
            <div>
              <h1 className="text-white font-bold text-2xl tracking-wide">SAInT</h1>
              <p className="text-blue-200 text-sm font-medium">Student Association</p>
              <p className="text-blue-300 text-xs opacity-80">Information Technology</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="relative z-10 mt-8 px-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center justify-between p-4 mb-2 text-left transition-all duration-300 group rounded-2xl relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-white shadow-lg backdrop-blur-sm border border-white/10'
                    : 'text-blue-200 hover:bg-white/5 hover:text-white hover:backdrop-blur-sm'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-r-full"></div>
                )}
                
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg' 
                      : 'bg-white/10 group-hover:bg-white/20'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-lg">{item.label}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  {item.badge && (
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg animate-bounce">
                      {item.badge}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        {/* Stats Section */}
        {activeTab === 'gallery' && (
          <div className="relative z-10 mx-4 mt-8 p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
            <h3 className="text-white font-bold text-lg mb-4">Gallery Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-sm">Total Events</span>
                <span className="text-white font-bold">6</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-sm">Photos</span>
                <span className="text-white font-bold">417</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200 text-sm">Videos</span>
                <span className="text-white font-bold">80</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 backdrop-blur-sm">
          <div className="text-center">
            <p className="text-blue-300 text-sm font-medium">Information Technology</p>
            <p className="text-blue-400 text-xs opacity-80">© 2024 SAInT Association</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;