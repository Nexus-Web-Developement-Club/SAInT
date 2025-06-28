import React from 'react';
import { ChevronLeft } from 'lucide-react';

const Header = ({ title, subtitle, onBackClick, showBackButton = false, logo = null }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 shadow-lg">
      <div className="flex items-center space-x-4">
        {showBackButton && (
          <button
            onClick={onBackClick}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {logo ? (
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{logo}</div>
            <div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-blue-100 mt-1">{subtitle}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-xl shadow-md">
              <span className="text-2xl font-bold text-blue-600">SAInT</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-blue-100 mt-1">{subtitle}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
