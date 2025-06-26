import { Calendar, MapPin, Clock, Users, Star, ChevronRight, Home, Activity, Camera, Bookmark } from 'lucide-react';

const EventsPage = () => {
  const navItems = [
    { name: 'Home', icon: Home, href: '#' },
    { name: 'Clubs', icon: Users, href: '#' },
    { name: 'Activities', icon: Activity, href: '#' },
    { name: 'Events', icon: Calendar, href: '#', active: true },
    { name: 'Members', icon: Users, href: '#' },
    { name: 'Gallery', icon: Camera, href: '#' }
  ];

  const upcomingEvents = [
    {
      title: "Tech Innovation Summit 2025",
      date: "July 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Main Auditorium",
      attendees: 150,
      category: "Technology",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Workshop Series",
      date: "July 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab B",
      attendees: 45,
      category: "Workshop",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Annual College Fest",
      date: "August 5, 2025",
      time: "9:00 AM - 11:00 PM",
      location: "College Grounds",
      attendees: 500,
      category: "Festival",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const completedEvents = [
    {
      title: "Coding Bootcamp 2025",
      date: "June 10, 2025",
      time: "Full Day",
      location: "Tech Center",
      attendees: 80,
      category: "Bootcamp",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Student Startup Pitch",
      date: "May 28, 2025",
      time: "3:00 PM - 7:00 PM",
      location: "Business Hall",
      attendees: 120,
      category: "Competition",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Open Source Contribution Day",
      date: "May 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Library Commons",
      attendees: 60,
      category: "Workshop",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  const importantEvents = [
    {
      title: "Annual SAInT Conference",
      date: "September 20, 2025",
      time: "Full Day Event",
      location: "Convention Center",
      attendees: 300,
      category: "Conference",
      gradient: "from-rose-500 to-orange-500",
      featured: true
    },
    {
      title: "Industry Leaders Meetup",
      date: "August 18, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Executive Lounge",
      attendees: 75,
      category: "Networking",
      gradient: "from-violet-500 to-purple-500",
      featured: true
    }
  ];

  const EventCard = ({ event, isCompleted = false }) => (
    <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group ${isCompleted ? 'opacity-90' : ''}`}>
      <div className={`h-2 bg-gradient-to-r ${event.gradient}`}></div>
      {event.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${event.gradient} text-white`}>
            {event.category}
          </span>
          {isCompleted && (
            <span className="text-green-600 text-sm font-medium">Completed</span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
          {event.title}
        </h3>
        
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-green-500" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-red-500" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-purple-500" />
            <span className="text-sm">{event.attendees} {isCompleted ? 'attended' : 'expected'}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className={`w-full bg-gradient-to-r ${event.gradient} text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}>
            {isCompleted ? 'View Details' : 'Register Now'}
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );

  const SectionHeader = ({ title, subtitle, icon: Icon }) => (
    <div className="flex items-center mb-8">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl mr-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-600 mt-1">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-2xl z-50 border-r border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SAInT
              </h1>
              <p className="text-xs text-gray-500">Keepin' it real!</p>
            </div>
          </div>
        </div>
        
        <nav className="mt-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center px-6 py-3 text-sm font-medium transition-all duration-300 group ${
                  item.active
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-r-4 border-pink-400 shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-purple-600'
                }`}
              >
                <Icon className={`w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110 ${
                  item.active ? 'text-white' : 'text-gray-400 group-hover:text-purple-500'
                }`} />
                {item.name}
                {item.active && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </a>
            );
          })}
        </nav>
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white">
            <div className="flex items-center mb-2">
              <Bookmark className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Quick Tip</span>
            </div>
            <p className="text-xs opacity-90">Stay updated with latest events and workshops!</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent mb-4">
              Events Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Discover, participate, and stay connected with SAInT's exciting events and activities
            </p>
          </div>

          {/* Upcoming Events Section */}
          <section className="mb-16">
            <SectionHeader 
              title="Upcoming Events" 
              subtitle="Don't miss out on these exciting upcoming events"
              icon={Calendar}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </section>

          {/* Important Events Section */}
          <section className="mb-16">
            <SectionHeader 
              title="Important Events" 
              subtitle="Featured and must-attend events for all members"
              icon={Star}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {importantEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </section>

          {/* Completed Events Section */}
          <section className="mb-16">
            <SectionHeader 
              title="Completed Events" 
              subtitle="Take a look at our successful past events"
              icon={Clock}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedEvents.map((event, index) => (
                <EventCard key={index} event={event} isCompleted={true} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;