import React, { useState, useEffect } from 'react';
import { Calendar, Camera, Download, X, ChevronLeft, ChevronRight, ZoomIn, Check, ArrowLeft, Share2, Maximize2, Home, Bell, Activity, Users, Image, UserCheck, Menu, Video, Play } from 'lucide-react';

// Mock data for events
const mockEvents = [
  {
    id: 1,
    title: "Annual Conference 2024",
    date: "March 15, 2024",
    imageCount: 12,
    videoCount: 5,
    thumbnail: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2774570/pexels-photo-2774570.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_20mb.mp4"
    ]
  },
  {
    id: 2,
    title: "Team Building Workshop",
    date: "February 28, 2024",
    imageCount: 8,
    videoCount: 3,
    thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2774570/pexels-photo-2774570.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    videos: [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4"
    ]
  },
  {
    id: 3,
    title: "Product Launch Event",
    date: "January 20, 2024",
    imageCount: 15,
    videoCount: 7,
    thumbnail: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: Array.from({ length: 15 }, (_, i) => [
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2774570/pexels-photo-2774570.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ][i % 5]),
    videos: Array.from({ length: 7 }, (_, i) => [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4"
    ][i % 3])
  },
  {
    id: 4,
    title: "Holiday Party 2023",
    date: "December 15, 2023",
    imageCount: 20,
    videoCount: 4,
    thumbnail: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: Array.from({ length: 20 }, (_, i) => [
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2774570/pexels-photo-2774570.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ][i % 6]),
    videos: Array.from({ length: 4 }, (_, i) => [
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
    ][i % 2])
  }
];

const navigationItems = [
  { name: 'Home', icon: Home, href: '#' },
  { name: 'Updates', icon: Bell, href: '#' },
  { name: 'Activities', icon: Activity, href: '#' },
  { name: 'Clubs', icon: Users, href: '#' },
  { name: 'Members', icon: UserCheck, href: '#' },
  { name: 'Gallery', icon: Image, href: '#', active: true },
];

function App() {
  const [selectedEvent, setSelectedEvent] = useState<typeof mockEvents[0] | null>(null);
  const [mediaType, setMediaType] = useState<'images' | 'videos' | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set());
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [isFullscreenMode, setIsFullscreenMode] = useState(false);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleEventClick = (event: typeof mockEvents[0]) => {
    setSelectedEvent(event);
    setMediaType(null);
    setCurrentImageIndex(0);
    setSelectedImages(new Set());
    setIsSelectMode(false);
    setIsFullscreenMode(false);
  };

  const handleMediaTypeSelect = (type: 'images' | 'videos') => {
    setMediaType(type);
    setCurrentImageIndex(0);
    setSelectedImages(new Set());
    setIsSelectMode(false);
    setIsFullscreenMode(false);
  };

  const handleBackToEvent = () => {
    setMediaType(null);
    setSelectedImages(new Set());
    setIsSelectMode(false);
    setIsFullscreenMode(false);
  };

  const handleBackToGallery = () => {
    setSelectedEvent(null);
    setMediaType(null);
    setSelectedImages(new Set());
    setIsSelectMode(false);
    setIsFullscreenMode(false);
  };

  const handlePreviousImage = () => {
    if (selectedEvent && mediaType) {
      const mediaArray = mediaType === 'images' ? selectedEvent.images : selectedEvent.videos;
      setCurrentImageIndex((prev) => 
        prev === 0 ? mediaArray.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedEvent && mediaType) {
      const mediaArray = mediaType === 'images' ? selectedEvent.images : selectedEvent.videos;
      setCurrentImageIndex((prev) => 
        prev === mediaArray.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleFullscreenPrevious = () => {
    if (selectedEvent && mediaType) {
      const mediaArray = mediaType === 'images' ? selectedEvent.images : selectedEvent.videos;
      setFullscreenImageIndex((prev) => 
        prev === 0 ? mediaArray.length - 1 : prev - 1
      );
    }
  };

  const handleFullscreenNext = () => {
    if (selectedEvent && mediaType) {
      const mediaArray = mediaType === 'images' ? selectedEvent.images : selectedEvent.videos;
      setFullscreenImageIndex((prev) => 
        prev === mediaArray.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleImageSelect = (index: number) => {
    const newSelected = new Set(selectedImages);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedImages(newSelected);
  };

  const handleDownloadSelected = () => {
    if (selectedEvent && mediaType) {
      const mediaArray = mediaType === 'images' ? selectedEvent.images : selectedEvent.videos;
      selectedImages.forEach(index => {
        const link = document.createElement('a');
        link.href = mediaArray[index];
        link.download = `${selectedEvent.title}_${mediaType}_${index + 1}.${mediaType === 'images' ? 'jpg' : 'mp4'}`;
        link.click();
      });
    }
  };

  const handleShareSelected = () => {
    if (selectedEvent && selectedImages.size > 0 && mediaType) {
      const mediaArray = mediaType === 'images' ? selectedEvent.images : selectedEvent.videos;
      if (navigator.share) {
        navigator.share({
          title: `${selectedEvent.title} - ${mediaType}`,
          text: `Check out these ${selectedImages.size} ${mediaType} from ${selectedEvent.title}`,
          url: window.location.href
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        const urls = Array.from(selectedImages).map(index => mediaArray[index]).join('\n');
        navigator.clipboard.writeText(urls).then(() => {
          alert(`${mediaType} URLs copied to clipboard!`);
        });
      }
    }
  };

  const handleDownloadMedia = (mediaUrl: string, eventTitle: string, index: number, type: string) => {
    const link = document.createElement('a');
    link.href = mediaUrl;
    link.download = `${eventTitle}_${type}_${index + 1}.${type === 'images' ? 'jpg' : 'mp4'}`;
    link.click();
  };

  const handleFullscreenMode = () => {
    setIsFullscreenMode(true);
    setFullscreenImageIndex(currentImageIndex);
  };

  // Keyboard navigation for fullscreen mode
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isFullscreenMode) {
        if (e.key === 'ArrowLeft') {
          handleFullscreenPrevious();
        } else if (e.key === 'ArrowRight') {
          handleFullscreenNext();
        } else if (e.key === 'Escape') {
          setIsFullscreenMode(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreenMode]);

  // Sidebar Component
  const Sidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-navy-900 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-center h-16 bg-navy-800 border-b border-navy-700">
        <h2 className="text-xl font-bold text-white">Organization</h2>
      </div>
      <nav className="mt-8">
        <div className="px-4 space-y-2">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                item.active
                  ? 'bg-navy-700 text-white'
                  : 'text-navy-300 hover:bg-navy-800 hover:text-white'
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );

  // Media Gallery View (Images or Videos)
  if (selectedEvent && mediaType) {
    const mediaArray = mediaType === 'images' ? selectedEvent.images : selectedEvent.videos;
    const mediaCount = mediaType === 'images' ? selectedEvent.imageCount : selectedEvent.videoCount;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex">
        <Sidebar />
        
        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex-1 lg:ml-0">
          {/* Header */}
          <div className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-40">
            <div className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleBackToEvent}
                    className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-medium">Back to Event</span>
                  </button>
                  <div className="h-6 w-px bg-slate-300" />
                  <div>
                    <h1 className="text-2xl font-bold text-navy-900">{selectedEvent.title} - {mediaType === 'images' ? 'Photos' : 'Videos'}</h1>
                    <p className="text-slate-600 flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedEvent.date}</span>
                      <span>•</span>
                      <span>{mediaCount} {mediaType}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {mediaType === 'images' && (
                    <button
                      onClick={handleFullscreenMode}
                      className="px-4 py-2 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors font-medium flex items-center space-x-2"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>Fullscreen</span>
                    </button>
                  )}
                  <button
                    onClick={() => setIsSelectMode(!isSelectMode)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      isSelectMode 
                        ? 'bg-navy-600 text-white hover:bg-navy-700' 
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {isSelectMode ? 'Cancel Select' : `Select ${mediaType === 'images' ? 'Photos' : 'Videos'}`}
                  </button>
                  {isSelectMode && selectedImages.size > 0 && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-slate-600">
                        {selectedImages.size} selected
                      </span>
                      <button
                        onClick={handleShareSelected}
                        className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </button>
                      <button
                        onClick={handleDownloadSelected}
                        className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Main Slideshow */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="relative">
                <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
                  {mediaType === 'images' ? (
                    <img
                      src={mediaArray[currentImageIndex]}
                      alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={mediaArray[currentImageIndex]}
                      controls
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={handlePreviousImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-navy-900 bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-navy-900 bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {mediaType === 'images' && (
                      <button
                        onClick={() => setZoomedImage(mediaArray[currentImageIndex])}
                        className="bg-navy-900 bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all"
                      >
                        <ZoomIn className="w-5 h-5" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDownloadMedia(mediaArray[currentImageIndex], selectedEvent.title, currentImageIndex, mediaType)}
                      className="bg-navy-900 bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Media Counter */}
                  <div className="absolute bottom-4 left-4 bg-navy-900 bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {mediaArray.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Media Grid */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-navy-900 mb-6">All {mediaType === 'images' ? 'Photos' : 'Videos'}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {mediaArray.map((media, index) => (
                  <div
                    key={index}
                    className={`relative aspect-square cursor-pointer transition-all duration-200 rounded-lg overflow-hidden ${
                      index === currentImageIndex ? 'ring-4 ring-navy-500' : 'hover:ring-2 hover:ring-navy-300'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    {mediaType === 'images' ? (
                      <img
                        src={media}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-slate-200 flex items-center justify-center">
                        <Play className="w-8 h-8 text-navy-600" />
                        <video
                          src={media}
                          className="absolute inset-0 w-full h-full object-cover opacity-50"
                          muted
                        />
                      </div>
                    )}
                    {isSelectMode && (
                      <div
                        className="absolute inset-0 bg-navy-900 bg-opacity-40 flex items-center justify-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageSelect(index);
                        }}
                      >
                        <div className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center ${
                          selectedImages.has(index) ? 'bg-navy-600' : 'bg-transparent'
                        }`}>
                          {selectedImages.has(index) && <Check className="w-4 h-4 text-white" />}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Slideshow Modal (Images only) */}
        {isFullscreenMode && mediaType === 'images' && (
          <div className="fixed inset-0 bg-navy-900 flex items-center justify-center z-50">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={mediaArray[fullscreenImageIndex]}
                alt={`Fullscreen image ${fullscreenImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={handleFullscreenPrevious}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-4 rounded-full transition-all"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={handleFullscreenNext}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-4 rounded-full transition-all"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsFullscreenMode(false)}
                className="absolute top-8 right-8 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-lg">
                {fullscreenImageIndex + 1} / {mediaArray.length}
              </div>
            </div>
          </div>
        )}

        {/* Zoom Modal (Images only) */}
        {zoomedImage && (
          <div className="fixed inset-0 bg-navy-900 bg-opacity-95 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-full max-h-full">
              <img
                src={zoomedImage}
                alt="Zoomed image"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Event Media Selection View
  if (selectedEvent && !mediaType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex">
        <Sidebar />
        
        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex-1 lg:ml-0">
          {/* Header */}
          <div className="bg-white shadow-sm border-b border-slate-200">
            <div className="px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleBackToGallery}
                    className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-medium">Back to Gallery</span>
                  </button>
                  <div className="h-6 w-px bg-slate-300" />
                  <div>
                    <h1 className="text-4xl font-bold text-navy-900 mb-2">{selectedEvent.title}</h1>
                    <p className="text-slate-600 text-lg flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>{selectedEvent.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media Type Selection */}
          <div className="px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">Choose Media Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Images Section */}
                <div
                  onClick={() => handleMediaTypeSelect('images')}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={selectedEvent.thumbnail}
                      alt="Images"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-navy-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Camera className="w-4 h-4" />
                      <span>{selectedEvent.imageCount}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-20 p-6 rounded-full">
                        <Image className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Photos</h3>
                    <p className="text-slate-600 mb-4">{selectedEvent.imageCount} photos available</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">View all photos</span>
                      <div className="flex items-center space-x-1 text-navy-600 font-medium">
                        <span>Browse</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Videos Section */}
                <div
                  onClick={() => handleMediaTypeSelect('videos')}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={selectedEvent.thumbnail}
                      alt="Videos"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-navy-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Video className="w-4 h-4" />
                      <span>{selectedEvent.videoCount}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-20 p-6 rounded-full">
                        <Video className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Videos</h3>
                    <p className="text-slate-600 mb-4">{selectedEvent.videoCount} videos available</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">View all videos</span>
                      <div className="flex items-center space-x-1 text-navy-600 font-medium">
                        <span>Browse</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Gallery View
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex">
      <Sidebar />
      
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-slate-200">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="text-center flex-1">
                <h1 className="text-4xl font-bold text-navy-900 mb-2">Event Gallery</h1>
                <p className="text-slate-600 text-lg">Browse through our collection of memorable events</p>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => handleEventClick(event)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="bg-white bg-opacity-90 text-navy-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Camera className="w-4 h-4" />
                      <span>{event.imageCount}</span>
                    </div>
                    <div className="bg-white bg-opacity-90 text-navy-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Video className="w-4 h-4" />
                      <span>{event.videoCount}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{event.title}</h3>
                  <p className="text-slate-600 flex items-center space-x-2 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4 text-sm text-slate-500">
                      <span>{event.imageCount} photos</span>
                      <span>{event.videoCount} videos</span>
                    </div>
                    <div className="flex items-center space-x-1 text-navy-600 font-medium">
                      <span>View Event</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;