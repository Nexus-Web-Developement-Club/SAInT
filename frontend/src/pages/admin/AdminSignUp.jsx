import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminSignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy signup logic
    if (email && password) {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-green-700 transition">
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          Already have an account? <Link to="/admin/signin" className="text-blue-600 font-semibold">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminSignUp;
