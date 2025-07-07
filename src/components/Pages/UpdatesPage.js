import React from 'react';

const UpdatesPage = () => {
  const updates = [
    { id: 1, title: 'Hackathon 2024 Registration Open', date: '2024-06-25', type: 'Event' },
    { id: 2, title: 'New Workshop on React Development', date: '2024-06-24', type: 'Workshop' },
    { id: 3, title: 'Monthly Club Meeting', date: '2024-06-23', type: 'Meeting' }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-slate-800 mb-12">Latest Updates</h2>
      <div className="space-y-6">
        {updates.map((update) => (
          <div key={update.id} className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{update.title}</h3>
                <p className="text-slate-600">{update.date}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                {update.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatesPage;
