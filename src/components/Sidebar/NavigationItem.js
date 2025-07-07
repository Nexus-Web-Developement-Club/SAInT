import React from 'react';

const NavigationItem = ({ item, isActive, onClick }) => {
  const IconComponent = item.icon;
  
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-8 py-4 text-left transition-all duration-300 relative group ${
        isActive 
          ? 'bg-blue-600 text-white shadow-lg border-r-4 border-blue-400' 
          : 'text-slate-300 hover:text-white hover:bg-slate-700'
      }`}
    >
      <IconComponent
        className={`w-6 h-6 mr-4 transition-transform duration-300 ${
          isActive ? 'scale-110' : 'group-hover:scale-105'
        }`}
      />

      <span className="font-semibold text-lg">{item.name}</span>

      {item.badge && (
        <span className="ml-auto bg-red-500 text-white text-sm rounded-full px-3 py-1 min-w-[24px] text-center shadow-md">
          {item.badge}
        </span>
      )}

      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400 rounded-r-full"></div>
      )}
    </button>
  );
};

export default NavigationItem;
