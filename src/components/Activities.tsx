import React, { useState } from 'react';
import { Calendar, Image } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  images?: string[];
}

const activitiesData: Activity[] = [
  {
    id: '1',
    title: 'Community Outreach Program',
    date: '2025-07-05',
    description:
      'Saint participated in a community outreach program, offering help and support to those in need in the neighborhood.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80',
    ],
  },
  {
    id: '2',
    title: 'Charity Fundraiser',
    date: '2025-06-18',
    description:
      'Saint organized a charity fundraiser event to raise money for local schools and hospitals.',
  },
  {
    id: '3',
    title: 'Environmental Clean-up Drive',
    date: '2025-08-12',
    description:
      'Saint led an environmental clean-up drive to promote sustainability and protect natural habitats.',
    images: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80'],
  },
];

const Activities: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  if (selectedActivity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-purple-50 p-10 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white bg-opacity-80 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-purple-300">
          <button
            onClick={() => setSelectedActivity(null)}
            className="flex items-center gap-3 text-purple-600 hover:text-purple-800 font-semibold mb-8 transition-colors"
          >
            ← Back to Activities
          </button>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">{selectedActivity.title}</h1>
          <div className="flex items-center gap-4 text-purple-600 mb-8 text-sm font-medium uppercase tracking-wide">
            <Calendar size={20} />
            <time>
              {new Date(selectedActivity.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <p className="text-gray-800 leading-relaxed mb-10 text-lg">{selectedActivity.description}</p>

          {selectedActivity.images && selectedActivity.images.length > 0 && (
            <>
              <div className="flex items-center gap-2 mb-6 text-yellow-500">
                <Image size={24} />
                <h3 className="text-2xl font-semibold">Gallery</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedActivity.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group transform transition-transform hover:scale-105"
                  >
                    <img
                      src={img}
                      alt={`${selectedActivity.title} image ${idx + 1}`}
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
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Activities</h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto">
            Discover the meaningful activities and contributions made by the Saint.
          </p>
        </header>

        {activitiesData.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {activitiesData.map((activity) => (
              <div
                key={activity.id}
                onClick={() => setSelectedActivity(activity)}
                className="cursor-pointer rounded-3xl bg-white bg-opacity-80 backdrop-blur-md border border-purple-300 shadow-xl p-7 flex flex-col justify-between transition-transform hover:scale-[1.05] hover:shadow-2xl"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-wide">{activity.title}</h3>
                  <div className="flex items-center gap-3 text-purple-600 font-medium text-sm uppercase mb-5 tracking-wider">
                    <Calendar size={18} />
                    <time>
                      {new Date(activity.date).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <p className="text-gray-800 text-base line-clamp-3">{activity.description}</p>
                </div>
                {activity.images && activity.images.length > 0 && (
                  <div className="mt-6 text-purple-700 font-semibold tracking-wide text-sm select-none">View images →</div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 text-lg font-medium">No activities available at the moment.</div>
        )}
      </div>
    </div>
  );
};

export default Activities;
