import React from 'react';
import { Home, Bell, Calendar, Users, Camera, User } from 'lucide-react';
import NavigationItem from './NavigationItem';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navigationItems = [
    { name: 'Home', icon: Home },
    { name: 'Updates', icon: Bell, badge: '1' },
    { name: 'Activities', icon: Calendar },
    { name: 'Clubs', icon: Users },
    { name: 'Members', icon: User },
    { name: 'Gallery', icon: Camera }
  ];

  return (
    <nav className="w-48 bg-slate-700 min-h-screen shadow-xl">
      <div className="py-6">
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.name}
            item={item}
            isActive={activeSection === item.name}
            onClick={() => setActiveSection(item.name)}
          />
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;

