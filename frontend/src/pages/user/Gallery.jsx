import React from 'react';

const Gallery = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">Gallery</h1>
    <p className="text-xl text-gray-600 mb-10 text-center">Our gallery will showcase photos and videos from events and activities.</p>

    {/* Placeholder Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center h-48"
        >
          <span className="text-gray-400 text-xl">Photo {index + 1}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
