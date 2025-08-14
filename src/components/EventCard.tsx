import React from 'react';
import { Calendar, Image, Video, Users, Play, Eye } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  imageCount: number;
  videoCount: number;
  thumbnail: string;
  onClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  imageCount,
  videoCount,
  thumbnail,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative h-56 overflow-hidden rounded-t-3xl">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Floating Action Button */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
          <Eye className="w-5 h-5 text-white" />
        </div>
        
        {/* Event Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white font-bold text-xl mb-2 drop-shadow-lg">{title}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="font-medium">{date}</span>
          </div>
        </div>
      </div>
      
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl">
                <Image className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <span className="text-lg font-bold text-gray-800">{imageCount}</span>
                <p className="text-xs text-gray-500 font-medium">Photos</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl">
                <Video className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <span className="text-lg font-bold text-gray-800">{videoCount}</span>
                <p className="text-xs text-gray-500 font-medium">Videos</p>
              </div>
            </div>
          </div>
          
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Play className="w-5 h-5 text-white ml-0.5" />
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 group-hover:w-full" 
               style={{ width: '60%' }}></div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 font-medium">View Gallery</span>
          <div className="flex items-center text-blue-600 font-semibold">
            <Users className="w-4 h-4 mr-1" />
            <span>{imageCount + videoCount} items</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;