import React from 'react';

const Members = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Members</h1>
    <p className="text-xl text-gray-600 mb-10 text-center">
      Meet the amazing community members of SAInT. Our members are active participants in events, workshops, and projects.
    </p>

    {/* Placeholder Members Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition flex flex-col items-center justify-center"
        >
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
            <span className="text-gray-400 text-xl">👤</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Member {index + 1}</h2>
          <p className="text-gray-600 text-center">
            Role or brief description about the member.
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Members;
