import React from 'react';
import { Link } from 'react-router-dom';

const AdminLanding = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold mb-6 text-gray-800">Welcome, Admin</h1>
    <p className="text-xl text-gray-600 mb-10 text-center">Manage SAInT’s club activities, members, and updates from here.</p>

    <div className="flex gap-6">
      <Link 
        to="/admin/signin" 
        className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
      >
        Sign In
      </Link>
      <Link 
        to="/admin/signup" 
        className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-green-700 transition"
      >
        Sign Up
      </Link>
    </div>
  </div>
);

export default AdminLanding;
