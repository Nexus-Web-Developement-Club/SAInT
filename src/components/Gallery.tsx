import React, { useState } from 'react';
import EventCard from './EventCard';
import MediaTypeSelector from './MediaTypeSelector';
import MediaGallery from './MediaGallery';
import { Search, Camera, Video } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  imageCount: number;
  videoCount: number;
  thumbnail: string;
}

interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  title: string;
}

const Gallery: React.FC = () => {
  const [currentView, setCurrentView] = useState<'events' | 'mediaTypes' | 'media'>('events');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedMediaType, setSelectedMediaType] = useState<'images' | 'videos' | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data
  const events: Event[] = [
    {
      id: '1',
      title: 'Traditional Day Celebration',
      date: 'March 15, 2024',
      imageCount: 45,
      videoCount: 8,
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: 'Birthday Celebration',
      date: 'February 28, 2024',
      imageCount: 32,
      videoCount: 5,
      thumbnail: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      title: 'Tech Workshop 2024',
      date: 'January 20, 2024',
      imageCount: 28,
      videoCount: 12,
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '4',
      title: 'Annual Conference',
      date: 'December 10, 2023',
      imageCount: 67,
      videoCount: 15,
      thumbnail: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '5',
      title: 'Hackathon 2023',
      date: 'November 5, 2023',
      imageCount: 89,
      videoCount: 22,
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '6',
      title: 'Freshers Welcome Party',
      date: 'September 15, 2023',
      imageCount: 156,
      videoCount: 18,
      thumbnail: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  // Sample media items
  const generateMediaItems = (count: number, type: 'image' | 'video'): MediaItem[] => {
    return Array.from({ length: count }, (_, i) => ({
      id: `${type}-${i + 1}`,
      url: type === 'image' 
        ? `https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=800`
        : `https://sample-videos.com/zip/10/mp4/SampleVideo_${i + 1}.mp4`,
      type,
      title: `${type} ${i + 1}`
    }));
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setCurrentView('mediaTypes');
  };

  const handleMediaTypeSelect = (type: 'images' | 'videos') => {
    setSelectedMediaType(type);
    setCurrentView('media');
  };

  const handleBack = () => {
    if (currentView === 'media') {
      setCurrentView('mediaTypes');
      setSelectedMediaType(null);
    } else if (currentView === 'mediaTypes') {
      setCurrentView('events');
      setSelectedEvent(null);
    }
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (currentView === 'media' && selectedEvent && selectedMediaType) {
    const mediaItems = selectedMediaType === 'images' 
      ? generateMediaItems(selectedEvent.imageCount, 'image')
      : generateMediaItems(selectedEvent.videoCount, 'video');

    return (
      <MediaGallery
        eventTitle={selectedEvent.title}
        mediaType={selectedMediaType}
        items={mediaItems}
        onBack={handleBack}
      />
    );
  }

  if (currentView === 'mediaTypes' && selectedEvent) {
    return (
      <MediaTypeSelector
        eventTitle={selectedEvent.title}
        onSelectImages={() => handleMediaTypeSelect('images')}
        onSelectVideos={() => handleMediaTypeSelect('videos')}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Gallery</h1>
            <p className="text-gray-600 text-lg">Browse through our collection of memorable events</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => handleEventClick(event)}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden border border-gray-200"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.thumbnail} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Media Count Badges */}
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Camera className="w-3 h-3 text-gray-600" />
                      <span className="text-xs font-medium text-gray-700">{event.imageCount}</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Video className="w-3 h-3 text-gray-600" />
                      <span className="text-xs font-medium text-gray-700">{event.videoCount}</span>
                    </div>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{event.date}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{event.imageCount} photos</span>
                    <span>{event.videoCount} videos</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;