import React from 'react';

const GalleryPage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-slate-800 mb-12">Gallery</h2>
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-semibold text-slate-800 mb-6">Event Photos</h3>
        <p className="text-slate-600 text-lg">Browse through photos from our events, workshops, and activities.</p>
      </div>
    </div>
  );
};

export default GalleryPage;

