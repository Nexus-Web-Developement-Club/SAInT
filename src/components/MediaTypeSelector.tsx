import React from 'react';
import { Image, Video, ArrowLeft, Play, Camera, Sparkles } from 'lucide-react';

interface MediaTypeSelectorProps {
  eventTitle: string;
  onSelectImages: () => void;
  onSelectVideos: () => void;
  onBack: () => void;
}

const MediaTypeSelector: React.FC<MediaTypeSelectorProps> = ({
  eventTitle,
  onSelectImages,
  onSelectVideos,
  onBack
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <div className="relative bg-white/80 backdrop-blur-xl shadow-xl border-b border-white/20">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex items-center space-x-6">
            <button
              onClick={onBack}
              className="p-3 hover:bg-white/60 rounded-2xl transition-all duration-300 group backdrop-blur-sm border border-white/30"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all duration-300" />
            </button>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  {eventTitle}
                </h1>
                <p className="text-gray-600 text-lg font-medium">Choose your media experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Images Card */}
          <div 
            onClick={onSelectImages}
            className="group relative bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer overflow-hidden border border-white/30 hover:border-blue-200 transform hover:-translate-y-3"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 rounded-full"></div>
              <div className="absolute top-12 right-8 w-4 h-4 bg-indigo-500 rounded-full"></div>
              <div className="absolute bottom-8 left-12 w-6 h-6 bg-purple-500 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-blue-400 rounded-full"></div>
            </div>

            <div className="relative p-8">
              {/* Icon Section */}
              <div className="relative h-48 flex items-center justify-center mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-3xl group-hover:from-blue-500/30 group-hover:to-indigo-600/30 transition-all duration-500"></div>
                <div className="relative p-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Camera className="w-16 h-16 text-white" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
                  <Image className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: '200ms' }}>
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                  Photo Gallery
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Explore stunning photographs capturing every precious moment of this event
                </p>
                
                {/* Action Button */}
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <span>Browse Photos</span>
                  <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Videos Card */}
          <div 
            onClick={onSelectVideos}
            className="group relative bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer overflow-hidden border border-white/30 hover:border-purple-200 transform hover:-translate-y-3"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-8 h-8 bg-purple-500 rounded-full"></div>
              <div className="absolute top-12 left-8 w-4 h-4 bg-pink-500 rounded-full"></div>
              <div className="absolute bottom-8 right-12 w-6 h-6 bg-indigo-500 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-purple-400 rounded-full"></div>
            </div>

            <div className="relative p-8">
              {/* Icon Section */}
              <div className="relative h-48 flex items-center justify-center mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-3xl group-hover:from-purple-500/30 group-hover:to-pink-600/30 transition-all duration-500"></div>
                <div className="relative p-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-16 h-16 text-white ml-1" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
                  <Video className="w-6 h-6 text-purple-600" />
                </div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: '200ms' }}>
                  <Sparkles className="w-5 h-5 text-pink-600" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-800 transition-colors duration-300">
                  Video Collection
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Watch dynamic videos that bring the event's energy and excitement to life
                </p>
                
                {/* Action Button */}
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <span>Watch Videos</span>
                  <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500 font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Choose your preferred media type to continue</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaTypeSelector;