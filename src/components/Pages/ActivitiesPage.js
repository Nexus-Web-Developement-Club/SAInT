import React from 'react';

const ActivitiesPage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-slate-800 mb-12">Activities</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Upcoming Events</h3>
          <p className="text-slate-600 text-lg">Check out our upcoming workshops, hackathons, and tech talks.</p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Past Activities</h3>
          <p className="text-slate-600 text-lg">Explore the events and activities we've organized in the past.</p>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;

