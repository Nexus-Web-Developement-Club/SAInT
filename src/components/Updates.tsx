import React, { useState } from 'react';
import { Calendar, Image } from 'lucide-react';

interface Update {
  id: string;
  title: string;
  date: string;
  description: string;
  images?: string[];
}

const updatesData: Update[] = [
  {
    id: '1',
    title: 'Website Redesign Launched',
    date: '2025-08-01',
    description:
      'We have launched a completely redesigned website with improved navigation, new features, and a modern look to enhance user experience.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80',
    ],
  },
  {
    id: '2',
    title: 'New Club Added: Robotics Club',
    date: '2025-07-15',
    description:
      'We are excited to announce the addition of the Robotics Club, focusing on hands-on projects, competitions, and workshops related to robotics and automation.',
  },
  {
    id: '3',
    title: 'Annual Tech Fest Scheduled',
    date: '2025-09-10',
    description:
      'Our annual Tech Fest will take place next month featuring hackathons, guest speakers, workshops, and more exciting activities. Stay tuned for more details!',
    images: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80'],
  },
];

const Updates: React.FC = () => {
  const [selectedUpdate, setSelectedUpdate] = useState<Update | null>(null);

  if (selectedUpdate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-purple-50 p-8 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white bg-opacity-80 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-purple-300">
          <button
            onClick={() => setSelectedUpdate(null)}
            className="flex items-center gap-3 text-purple-600 hover:text-purple-800 font-semibold mb-8 transition-colors"
          >
            ← Back to Updates
          </button>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">{selectedUpdate.title}</h1>
          <div className="flex items-center gap-4 text-purple-600 mb-8 text-sm font-medium uppercase tracking-wide">
            <Calendar size={20} />
            <time>
              {new Date(selectedUpdate.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <p className="text-gray-800 leading-relaxed mb-10 text-lg">{selectedUpdate.description}</p>

          {selectedUpdate.images && selectedUpdate.images.length > 0 && (
            <>
              <div className="flex items-center gap-2 mb-6 text-yellow-500">
                <Image size={24} />
                <h3 className="text-2xl font-semibold">Gallery</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedUpdate.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group transform transition-transform hover:scale-105"
                  >
                    <img
                      src={img}
                      alt={`${selectedUpdate.title} image ${idx + 1}`}
                      className="w-full h-52 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                      <p className="text-white text-sm font-semibold">View Image</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-purple-50 p-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Updates</h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto">
            Stay updated with the latest news, announcements, and events from our community.
          </p>
        </header>

        {updatesData.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {updatesData.map((update) => (
              <div
                key={update.id}
                onClick={() => setSelectedUpdate(update)}
                className="cursor-pointer rounded-3xl bg-white bg-opacity-80 backdrop-blur-md border border-purple-300 shadow-xl p-7 flex flex-col justify-between transition-transform hover:scale-[1.05] hover:shadow-2xl"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-wide">{update.title}</h3>
                  <div className="flex items-center gap-3 text-purple-600 font-medium text-sm uppercase mb-5 tracking-wider">
                    <Calendar size={18} />
                    <time>
                      {new Date(update.date).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <p className="text-gray-800 text-base line-clamp-3">{update.description}</p>
                </div>
                {update.images && update.images.length > 0 && (
                  <div className="mt-6 text-purple-700 font-semibold tracking-wide text-sm select-none">View images →</div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 text-lg font-medium">No updates available at the moment.</div>
        )}
      </div>
    </div>
  );
};

export default Updates;
