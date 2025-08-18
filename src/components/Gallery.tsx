import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600',
    alt: 'Group of students studying together',
    caption: 'Club members collaborating on a project during a workshop.'
  },
  {
    src: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600',
    alt: 'Teacher assisting student',
    caption: 'Faculty mentor guiding a student through a lab exercise.'
  },
  {
    src: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600',
    alt: 'Classroom lecture',
    caption: 'Interactive classroom session on web development concepts.'
  },
  {
    src: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600',
    alt: 'Students in computer lab',
    caption: 'Hands-on practice session with real-world coding scenarios.'
  },
  {
    src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600',
    alt: 'Students working on assignment',
    caption: 'Late-night hackathon brainstorming session in progress.'
  },
  {
    src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    alt: 'Discussion at whiteboard',
    caption: 'Club members discussing UI/UX strategies at the whiteboard.'
  }
];

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <div className="flex items-center gap-3 mb-8">
          <ImageIcon className="text-pink-500" size={28} />
          <h1 className="text-3xl font-bold text-gray-800">Gallery</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map(({ src, alt, caption }, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-gray-700 text-sm">{caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
