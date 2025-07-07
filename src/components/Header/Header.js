import React from 'react';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-4 shadow-sm">
      <div className="flex items-center">
        <div className="flex items-center space-x-4">
          <Logo />
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              SAInT : Student Association of Information Technology
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
