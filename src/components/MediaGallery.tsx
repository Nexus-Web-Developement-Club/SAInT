import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  Eye, 
  Grid3X3, 
  List,
  ChevronLeft,
  ChevronRight,
  X,
  Check
} from 'lucide-react';

interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  title: string;
}

interface MediaGalleryProps {
  eventTitle: string;
  mediaType: 'images' | 'videos';
  items: MediaItem[];
  onBack: () => void;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({
  eventTitle,
  mediaType,
  items,
  onBack
}) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const [isSelectionMode, setIsSelectionMode] = useState(false);

  const toggleSelection = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const selectAll = () => {
    if (selectedItems.size === items.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(items.map(item => item.id)));
    }
  };

  const handleDownload = (itemIds?: string[]) => {
    const idsToDownload = itemIds || Array.from(selectedItems);
    console.log('Downloading items:', idsToDownload);
    // Implement download logic here
  };

  const handleShare = (itemIds?: string[]) => {
    const idsToShare = itemIds || Array.from(selectedItems);
    console.log('Sharing items:', idsToShare);
    // Implement share logic here
  };

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
  };

  const navigateFullscreen = (direction: 'prev' | 'next') => {
    if (fullscreenIndex === null) return;
    
    if (direction === 'prev') {
      setFullscreenIndex(fullscreenIndex > 0 ? fullscreenIndex - 1 : items.length - 1);
    } else {
      setFullscreenIndex(fullscreenIndex < items.length - 1 ? fullscreenIndex + 1 : 0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{eventTitle}</h1>
                <p className="text-gray-600 capitalize">{mediaType} ({items.length})</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Selection Mode Toggle */}
              <button
                onClick={() => {
                  setIsSelectionMode(!isSelectionMode);
                  setSelectedItems(new Set());
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isSelectionMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isSelectionMode ? 'Cancel' : 'Select'}
              </button>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Selection Actions */}
          {isSelectionMode && (
            <div className="mt-4 flex items-center justify-between bg-blue-50 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={selectAll}
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  {selectedItems.size === items.length ? 'Deselect All' : 'Select All'}
                </button>
                <span className="text-gray-600">
                  {selectedItems.size} of {items.length} selected
                </span>
              </div>

              {selectedItems.size > 0 && (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDownload()}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => handleShare()}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className={`grid gap-4 ${
          viewMode === 'grid' 
            ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`relative group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Selection Checkbox */}
              {isSelectionMode && (
                <div className="absolute top-2 left-2 z-10">
                  <button
                    onClick={() => toggleSelection(item.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedItems.has(item.id)
                        ? 'bg-blue-600 border-blue-600'
                        : 'bg-white border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {selectedItems.has(item.id) && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </button>
                </div>
              )}

              {/* Media Content */}
              <div 
                className={`relative ${viewMode === 'list' ? 'w-32 h-24' : 'aspect-square'} overflow-hidden cursor-pointer`}
                onClick={() => !isSelectionMode && openFullscreen(index)}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    muted
                  />
                )}
                
                {/* Hover Actions */}
                {!isSelectionMode && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openFullscreen(index);
                      }}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Eye className="w-4 h-4 text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload([item.id]);
                      }}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Download className="w-4 h-4 text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare([item.id]);
                      }}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                )}
              </div>

              {/* List View Info */}
              {viewMode === 'list' && (
                <div className="flex-1 p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 capitalize">{item.type}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenIndex !== null && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => navigateFullscreen('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => navigateFullscreen('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-full max-h-full p-4">
            {items[fullscreenIndex].type === 'image' ? (
              <img
                src={items[fullscreenIndex].url}
                alt={items[fullscreenIndex].title}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <video
                src={items[fullscreenIndex].url}
                controls
                className="max-w-full max-h-full"
              />
            )}
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 rounded-lg px-4 py-2">
            <span className="text-white text-sm">
              {fullscreenIndex + 1} of {items.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;