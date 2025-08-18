import React, { useState } from 'react';
import {
  ArrowLeft,
  Users,
  ChevronDown,
  Calendar,
  MapPin,
  User,
  FileText,
  Image
} from 'lucide-react';

interface Club {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
}

interface Activity {
  id: string;
  name: string;
  facultyCoordinator: string;
  date: string;
  location: string;
  description: string;
  images: string[];
  year: string;
}

const Clubs: React.FC = () => {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>('2024-2025');
  const [viewMembers, setViewMembers] = useState<boolean>(false);

  const memberList = [
    'Siddhi Pokale',
    'Soham Kulkarni',
    'Swapnil Dahiwade',
    'Hitesh Chavan',
    'Anisha Lokhande',
    'Anish Talreja'
  ];

  const clubs: Club[] = [
    {
      id: 'nexus',
      name: 'Nexus',
      description:
        'The premier web development club fostering innovation and collaboration. We organize workshops on modern web technologies, hackathons, and hands-on projects to empower students with cutting-edge development skills.',
      logo: '/logos/nexus-logo.png',
      category: 'Web Development'
    },
    {
      id: 'cyberbort',
      name: 'Cyberbort',
      description:
        'Dedicated to cybersecurity education and awareness. We conduct workshops on ethical hacking, security audits, and digital forensics to prepare students for the cybersecurity landscape.',
      logo: '/logos/cyberbort-logo.png',
      category: 'Cybersecurity'
    },
    {
      id: 'ai-club',
      name: 'AI Club',
      description:
        'Exploring the frontiers of artificial intelligence and machine learning. We organize seminars on AI trends, ML workshops, and collaborative research projects in emerging AI technologies.',
      logo: '/logos/ai-club-logo.png',
      category: 'Artificial Intelligence'
    },
    {
      id: 'iot-club',
      name: 'IoT Club',
      description:
        'Connecting the digital and physical worlds through Internet of Things. We focus on smart device development, sensor integration, and innovative IoT solutions for real-world problems.',
      logo: '/logos/iot-logo.png',
      category: 'Internet of Things'
    },
    {
      id: 'meet-achievers',
      name: 'Meet the Achievers',
      description:
        'Bridging the gap between students and successful alumni. We organize networking events, mentorship programs, and career guidance sessions to inspire and guide current students.',
      logo: '/logos/achievers-logo.png',
      category: 'Alumni Network'
    },
    {
      id: 'social-activity',
      name: 'Social Activity Cell',
      description:
        'Promoting social responsibility and community engagement. We organize charity drives, community service projects, and social awareness campaigns to create positive societal impact.',
      logo: '/logos/social-cell-logo.png',
      category: 'Social Service'
    }
  ];

  const activities: Record<string, Activity[]> = {
    nexus: [
      {
        id: '1',
        name: 'HTML Workshop',
        facultyCoordinator: 'Dr. Pallavi Tekade',
        date: '2024-03-15',
        location: "JSPM's Rajarshi Shahu College of Engineering",
        description:
          'Comprehensive workshop covering HTML5 fundamentals, semantic markup, and modern web development practices. Students learned to create structured, accessible web content.',
        images: ['/api/placeholder/400/250', '/api/placeholder/400/250'],
        year: '2024-2025'
      },
      {
        id: '2',
        name: 'React.js Bootcamp',
        facultyCoordinator: 'Dr. Pallavi Tekade',
        date: '2024-02-20',
        location: "JSPM's Rajarshi Shahu College of Engineering",
        description:
          'Intensive 3-day bootcamp on React.js covering components, hooks, state management, and modern development patterns for building interactive web applications.',
        images: ['/api/placeholder/400/250'],
        year: '2024-2025'
      },
      {
        id: '3',
        name: 'Web Development Hackathon',
        facultyCoordinator: 'Dr. Pallavi Tekade',
        date: '2023-11-10',
        location: "JSPM's Rajarshi Shahu College of Engineering",
        description:
          '24-hour hackathon challenging students to create innovative web solutions. Teams developed full-stack applications addressing real-world problems.',
        images: ['/api/placeholder/400/250', '/api/placeholder/400/250', '/api/placeholder/400/250'],
        year: '2023-2024'
      }
    ],
    cyberbort: [
      {
        id: '4',
        name: 'Ethical Hacking Workshop',
        facultyCoordinator: 'Prof. Sandeep Patil',
        date: '2024-04-05',
        location: "JSPM's Rajarshi Shahu College of Engineering",
        description:
          'Hands-on workshop on ethical hacking techniques, penetration testing, and vulnerability assessment. Students learned responsible security practices.',
        images: ['/api/placeholder/400/250'],
        year: '2024-2025'
      },
      {
        id: '5',
        name: 'Cybersecurity Awareness Seminar',
        facultyCoordinator: 'Dr. Meera Joshi',
        date: '2023-09-12',
        location: "JSPM's Rajarshi Shahu College of Engineering",
        description:
          'Comprehensive seminar on cybersecurity threats, digital privacy, and protection strategies for individuals and organizations.',
        images: ['/api/placeholder/400/250', '/api/placeholder/400/250'],
        year: '2023-2024'
      }
    ],
    'ai-club': [
      {
        id: '6',
        name: 'Machine Learning Fundamentals',
        facultyCoordinator: 'Dr. Rahul Deshmukh',
        date: '2024-01-18',
        location: "JSPM's Rajarshi Shahu College of Engineering",
        description:
          'Introduction to machine learning concepts, algorithms, and practical implementation using Python libraries like scikit-learn and TensorFlow.',
        images: ['/api/placeholder/400/250'],
        year: '2024-2025'
      }
    ],
    'iot-club': [
      {
        id: '7',
        name: 'Smart Home Automation Project',
        facultyCoordinator: 'Prof. Anita Kulkarni',
        date: '2024-03-22',
        location: "JSPM's Rajarshi Shahu College of Engineering",
        description:
          'Practical project on building IoT-based smart home systems using Arduino, sensors, and mobile applications for remote monitoring and control.',
        images: ['/api/placeholder/400/250', '/api/placeholder/400/250'],
        year: '2024-2025'
      }
    ],
    'meet-achievers': [
      {
        id: '8',
        name: 'Alumni Networking Session',
        facultyCoordinator: 'Prof. Vikram Singh',
        date: '2024-02-14',
        location: "JSPM's Rajarshi Shahu College of Engineering",
        description:
          'Interactive session with successful alumni sharing career insights, industry trends, and mentorship opportunities for current students.',
        images: ['/api/placeholder/400/250'],
        year: '2024-2025'
      }
    ],
    'social-activity': [
      {
        id: '9',
        name: 'Community Cleanup Drive',
        facultyCoordinator: 'Prof. Sunita Rane',
        date: '2024-04-22',
        location: "JSPM's Rajarshi Shahu College of Engineering",
        description:
          'Environmental awareness campaign with community cleanup activities, tree plantation, and sustainability workshops for local community engagement.',
        images: ['/api/placeholder/400/250', '/api/placeholder/400/250'],
        year: '2024-2025'
      }
    ]
  };

  const years = ['2024-2025', '2023-2024', '2022-2023'];

  const selectedClubData = clubs.find((c) => c.id === selectedClub);
  const clubActivities = selectedClub
    ? (activities[selectedClub] || []).filter((act) => act.year === selectedYear)
    : [];

  if (selectedActivity) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedActivity(null)}
            className="flex items-center gap-2 text-purple-700 hover:text-purple-900 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Activities
          </button>
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-purple-300 shadow-md">
            <h1 className="text-3xl font-bold text-purple-900 mb-6">{selectedActivity.name}</h1>
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-purple-900">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="text-indigo-500" size={20} />
                  <div>
                    <p className="text-sm font-semibold">Faculty Coordinator</p>
                    <p>{selectedActivity.facultyCoordinator}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-green-500" size={20} />
                  <div>
                    <p className="text-sm font-semibold">Date</p>
                    <p>{new Date(selectedActivity.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-red-500 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-semibold">Location</p>
                    <p>{selectedActivity.location}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-yellow-500" size={20} />
                <h3 className="text-xl font-semibold text-purple-900">About the Session</h3>
              </div>
              <p className="leading-relaxed">{selectedActivity.description}</p>
            </div>
            {selectedActivity.images.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Image className="text-pink-500" size={20} />
                  <h3 className="text-xl font-semibold text-purple-900">Session Gallery</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedActivity.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative group rounded-lg overflow-hidden shadow-lg"
                    >
                      <img
                        src={img}
                        alt={`${selectedActivity.name} image ${idx + 1}`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-purple-900 mb-8">Clubs & Activities</h1>
        {!selectedClub && (
          <div className="grid md:grid-cols-3 gap-8">
            {clubs.map((club) => (
              <div
                key={club.id}
                className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-purple-300 cursor-pointer hover:bg-white/80 transition-colors shadow-md"
                onClick={() => {
                  setSelectedClub(club.id);
                  setViewMembers(false);
                  setSelectedYear('2024-2025');
                }}
              >
                <img
                  src={club.logo}
                  alt={`${club.name} logo`}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h2 className="text-xl font-semibold text-purple-900 mb-2">{club.name}</h2>
                <p className="text-purple-900 text-sm leading-relaxed">{club.description}</p>
              </div>
            ))}
          </div>
        )}

        {selectedClub && selectedClubData && (
          <div>
            <button
              onClick={() => setSelectedClub(null)}
              className="flex items-center gap-2 text-purple-700 hover:text-purple-900 mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Clubs
            </button>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-purple-300 shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <img
                  src={selectedClubData.logo}
                  alt={`${selectedClubData.name} logo`}
                  className="w-32 h-32 object-contain rounded-lg"
                />
                <div>
                  <h2 className="text-3xl font-bold text-purple-900 mb-2">{selectedClubData.name}</h2>
                  <p className="text-purple-900 max-w-xl">{selectedClubData.description}</p>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-4">
                <label htmlFor="yearSelect" className="text-purple-900 font-semibold">
                  Select Academic Year:
                </label>
                <select
                  id="yearSelect"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="rounded-md p-1 text-black"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-900 mb-4">Activities</h3>
                {clubActivities.length === 0 && (
                  <p className="text-purple-800">No activities found for selected year.</p>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  {clubActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="bg-white/70 backdrop-blur-md rounded-xl p-4 cursor-pointer hover:bg-white/80 transition-colors shadow-md"
                      onClick={() => setSelectedActivity(activity)}
                    >
                      <h4 className="text-lg font-semibold text-purple-900 mb-1">{activity.name}</h4>
                      <p className="text-sm text-purple-900 mb-2">{activity.facultyCoordinator}</p>
                      <p className="text-xs text-purple-900">
                        {new Date(activity.date).toLocaleDateString()} &bull; {activity.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setViewMembers(!viewMembers)}
                className="mt-8 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                {viewMembers ? 'Hide' : 'View'} Club Members
              </button>

              {viewMembers && (
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-purple-900 mb-2">Members</h4>
                  <ul className="list-disc list-inside text-purple-900">
                    {memberList.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clubs;
