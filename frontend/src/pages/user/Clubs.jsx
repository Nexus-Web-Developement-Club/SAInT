import React from 'react';

const Clubs = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Clubs</h1>
    <p className="text-xl text-gray-600 mb-10 text-center">
      Discover the different clubs and communities under SAInT. Join the one that fits your interests and grow with like-minded peers.
    </p>

    {/* Placeholder Clubs Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition flex flex-col items-center justify-center"
        >
          <span className="text-5xl mb-4">🏫</span>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Club {index + 1}</h2>
          <p className="text-gray-600 text-center">
            Brief description of the club, its purpose, and the type of members it welcomes.
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Clubs;
