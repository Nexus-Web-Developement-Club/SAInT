import React, { useState } from 'react';
import { ArrowLeft, Users, ChevronDown, Calendar, MapPin, User, FileText, Image } from 'lucide-react';

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

  const clubs: Club[] = [
    {
      id: 'nexus',
      name: 'Nexus',
      description: 'The premier web development club fostering innovation and collaboration. We organize workshops on modern web technologies, hackathons, and hands-on projects to empower students with cutting-edge development skills.',
      logo: '/logos/nexus-logo.png',
      category: 'Web Development'
    },
    {
      id: 'cyberbort',
      name: 'Cyberbort',
      description: 'Dedicated to cybersecurity education and awareness. We conduct workshops on ethical hacking, security audits, and digital forensics to prepare students for the cybersecurity landscape.',
      logo: '/logos/cyberbort-logo.png',
      category: 'Cybersecurity'
    },
    {
      id: 'ai-club',
      name: 'AI Club',
      description: 'Exploring the frontiers of artificial intelligence and machine learning. We organize seminars on AI trends, ML workshops, and collaborative research projects in emerging AI technologies.',
      logo: '/logos/ai-club-logo.png',
      category: 'Artificial Intelligence'
    },
    {
      id: 'iot-club',
      name: 'IoT Club',
      description: 'Connecting the digital and physical worlds through Internet of Things. We focus on smart device development, sensor integration, and innovative IoT solutions for real-world problems.',
      logo: '/logos/iot-logo.png',
      category: 'Internet of Things'
    },
    {
      id: 'meet-achievers',
      name: 'Meet the Achievers',
      description: 'Bridging the gap between students and successful alumni. We organize networking events, mentorship programs, and career guidance sessions to inspire and guide current students.',
      logo: '/logos/achievers-logo.png',
      category: 'Alumni Network'
    },
    {
      id: 'social-activity',
      name: 'Social Activity Cell',
      description: 'Promoting social responsibility and community engagement. We organize charity drives, community service projects, and social awareness campaigns to create positive societal impact.',
      logo: '/logos/social-cell-logo.png',
      category: 'Social Service'
    }
  ];

  const activities: Record<string, Activity[]> = {
    'nexus': [
      {
        id: '1',
        name: 'HTML Workshop',
        facultyCoordinator: 'Prof. Rajesh Kumar',
        date: '2024-03-15',
        location: 'JSPM\'s Rajarshi Shahu College of Engineering',
        description: 'Comprehensive workshop covering HTML5 fundamentals, semantic markup, and modern web development practices. Students learned to create structured, accessible web content.',
        images: ['/api/placeholder/400/250', '/api/placeholder/400/250'],
        year: '2024-2025'
      },
      {
        id: '2',
        name: 'React.js Bootcamp',
        facultyCoordinator: 'Dr. Priya Sharma',
        date: '2024-02-20',
        location: 'JSPM\'s Rajarshi Shahu College of Engineering',
        description: 'Intensive 3-day bootcamp on React.js covering components, hooks, state management, and modern development patterns for building interactive web applications.',
        images: ['/api/placeholder/400/250'],
        year: '2024-2025'
      },
      {
        id: '3',
        name: 'Web Development Hackathon',
        facultyCoordinator: 'Prof. Amit Verma',
        date: '2023-11-10',
        location: 'JSPM\'s Rajarshi Shahu College of Engineering',
        description: '24-hour hackathon challenging students to create innovative web solutions. Teams developed full-stack applications addressing real-world problems.',
        images: ['/api/placeholder/400/250', '/api/placeholder/400/250', '/api/placeholder/400/250'],
        year: '2023-2024'
      }
    ],
    'cyberbort': [
      {
        id: '4',
        name: 'Ethical Hacking Workshop',
        facultyCoordinator: 'Prof. Sandeep Patil',
        date: '2024-04-05',
        location: 'JSPM\'s Rajarshi Shahu College of Engineering',
        description: 'Hands-on workshop on ethical hacking techniques, penetration testing, and vulnerability assessment. Students learned responsible security practices.',
        images: ['/api/placeholder/400/250'],
        year: '2024-2025'
      },
      {
        id: '5',
        name: 'Cybersecurity Awareness Seminar',
        facultyCoordinator: 'Dr. Meera Joshi',
        date: '2023-09-12',
        location: 'JSPM\'s Rajarshi Shahu College of Engineering',
        description: 'Comprehensive seminar on cybersecurity threats, digital privacy, and protection strategies for individuals and organizations.',
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
        location: 'JSPM\'s Rajarshi Shahu College of Engineering',
        description: 'Introduction to machine learning concepts, algorithms, and practical implementation using Python libraries like scikit-learn and TensorFlow.',
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
        location: 'JSPM\'s Rajarshi Shahu College of Engineering',
        description: 'Practical project on building IoT-based smart home systems using Arduino, sensors, and mobile applications for remote monitoring and control.',
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
        location: 'JSPM\'s Rajarshi Shahu College of Engineering',
        description: 'Interactive session with successful alumni sharing career insights, industry trends, and mentorship opportunities for current students.',
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
        location: 'JSPM\'s Rajarshi Shahu College of Engineering',
        description: 'Environmental awareness campaign with community cleanup activities, tree plantation, and sustainability workshops for local community engagement.',
        images: ['/api/placeholder/400/250', '/api/placeholder/400/250'],
        year: '2024-2025'
      }
    ]
  };

  const years = ['2024-2025', '2023-2024', '2022-2023'];

  const selectedClubData = clubs.find(club => club.id === selectedClub);
  const clubActivities = selectedClub ? (activities[selectedClub] || []).filter(activity => activity.year === selectedYear) : [];

  if (selectedActivity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => setSelectedActivity(null)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Activities
          </button>

          {/* Activity Details */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h1 className="text-3xl font-bold text-white mb-6">{selectedActivity.name}</h1>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/90">
                  <User className="text-blue-300" size={20} />
                  <div>
                    <p className="text-sm text-white/70">Faculty Coordinator</p>
                    <p className="font-semibold">{selectedActivity.facultyCoordinator}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-white/90">
                  <Calendar className="text-green-300" size={20} />
                  <div>
                    <p className="text-sm text-white/70">Date</p>
                    <p className="font-semibold">{new Date(selectedActivity.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-white/90">
                  <MapPin className="text-red-300 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-white/70">Location</p>
                    <p className="font-semibold">{selectedActivity.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-yellow-300" size={20} />
                <h3 className="text-xl font-semibold text-white">About the Session</h3>
              </div>
              <p className="text-white/80 leading-relaxed">{selectedActivity.description}</p>
            </div>

            {selectedActivity.images.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Image className="text-pink-300" size={20} />
                  <h3 className="text-xl font-semibold text-white">Session Gallery</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedActivity.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt={`${selectedActivity.name} - ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <p className="text-white text-sm">View Image</p>
                      </div>
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

  if (selectedClub && selectedClubData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => setSelectedClub(null)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Clubs
          </button>

          {/* Club Header */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                  <img
                    src={selectedClubData.logo}
                    alt={selectedClubData.name}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl font-bold text-white mb-2">{selectedClubData.name}</h1>
                <p className="text-blue-300 text-lg mb-4">{selectedClubData.category}</p>
                <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
                  {selectedClubData.description}
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                <Users size={20} />
                View Club Members
              </button>
            </div>
          </div>

          {/* Activities Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold text-white">Activities</h2>
              
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-white/20 text-white border border-white/30 rounded-lg px-4 py-2 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {years.map(year => (
                    <option key={year} value={year} className="bg-gray-800 text-white">
                      {year}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70" size={16} />
              </div>
            </div>

            {clubActivities.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubActivities.map(activity => (
                  <div
                    key={activity.id}
                    onClick={() => setSelectedActivity(activity)}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all cursor-pointer hover:transform hover:scale-105"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{activity.name}</h3>
                    <div className="space-y-2 text-white/80">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-sm">{new Date(activity.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span className="text-sm">{activity.facultyCoordinator}</span>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm mt-3 line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="mt-4 text-blue-300 text-sm font-medium">
                      Click to view details →
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-white/40 mb-4">
                  <Calendar size={48} className="mx-auto" />
                </div>
                <p className="text-white/70 text-lg">No activities found for {selectedYear}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Clubs</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Discover our diverse range of clubs and communities. Each club offers unique opportunities 
            for learning, networking, and personal growth in specialized fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map(club => (
            <div
              key={club.id}
              onClick={() => setSelectedClub(club.id)}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all cursor-pointer hover:transform hover:scale-105"
            >
              <div className="text-center">
                <div className="relative mx-auto mb-6 w-24 h-24">
                  <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30 group-hover:border-white/50 transition-colors">
                    <img
                      src={club.logo}
                      alt={club.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {club.name}
                </h3>
                
                <p className="text-blue-300 text-sm font-medium mb-4">
                  {club.category}
                </p>
                
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {club.description}
                </p>
                
                <div className="text-blue-300 text-sm font-medium group-hover:text-white transition-colors">
                  Explore Club →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;