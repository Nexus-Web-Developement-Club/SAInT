import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-4xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
    <p className="text-gray-600 mb-6">This is a dummy dashboard. You can manage members, clubs, updates, and gallery from here.</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Link to="#" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition">
        <span className="text-5xl mb-4">👥</span>
        <h2 className="text-xl font-semibold">Manage Members</h2>
      </Link>
      <Link to="#" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition">
        <span className="text-5xl mb-4">📚</span>
        <h2 className="text-xl font-semibold">Manage Clubs</h2>
      </Link>
      <Link to="#" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition">
        <span className="text-5xl mb-4">📰</span>
        <h2 className="text-xl font-semibold">Manage Updates</h2>
      </Link>
      <Link to="#" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition">
        <span className="text-5xl mb-4">📸</span>
        <h2 className="text-xl font-semibold">Manage Gallery</h2>
      </Link>
    </div>
  </div>
);

export default AdminDashboard;
