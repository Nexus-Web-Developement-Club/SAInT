import React from 'react';

const Updates = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Updates</h1>
    <p className="text-xl text-gray-600 mb-10 text-center">
      Stay updated with the latest news, announcements, and upcoming events from SAInT.
    </p>

    {/* Placeholder Updates List */}
    <div className="w-full max-w-3xl space-y-6">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Update Title {index + 1}</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet elit nec mi tincidunt, vitae placerat nisl facilisis.
          </p>
          <p className="text-gray-400 text-sm mt-2">Posted on 2025-08-{10 + index}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Updates;
