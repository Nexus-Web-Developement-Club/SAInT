import React from 'react';
import { ChevronLeft } from 'lucide-react';
// Import your SAInT logo
import saintLogo from '../assets/images/saint-logo.png';

const Header = ({ title, subtitle, onBackClick, showBackButton = false, logo = null, logoImage = null }) => {
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
        
        {/* Club logo or SAInT logo */}
        {logoImage ? (
          <div className="flex items-center space-x-4">
            <img 
              src={logoImage} 
              alt="Club Logo" 
              className="w-16 h-16 rounded-full bg-white p-2 shadow-md object-contain"
              onError={(e) => {
                // Fallback to emoji if image fails
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="text-4xl hidden">{logo}</div>
            <div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-blue-100 mt-1">{subtitle}</p>
            </div>
          </div>
        ) : logo ? (
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
              <img 
                src={saintLogo} 
                alt="SAInT Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  // Fallback to text if image fails
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-2xl font-bold text-blue-600 hidden">SAInT</span>
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