
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const UserLayout = () => (
  <div className="flex min-h-screen bg-gray-100">
    <Sidebar />
    <div className="flex-1">
      <Outlet /> {/* Renders the nested page component */}
    </div>
  </div>
);

export default UserLayout;
