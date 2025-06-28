import React from 'react';
import { User, Calendar, MapPin } from 'lucide-react';

const ActivityCard = ({ activity, onActivityClick }) => {
  return (
    <div
      onClick={onActivityClick}
      className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-300"
    >
      <h4 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h4>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center">
          <User className="w-4 h-4 mr-2" />
          <span>{activity.coordinator}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{activity.date}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-xs">{activity.location}</span>
        </div>
      </div>
      <div className="mt-4">
        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          View Details →
        </span>
      </div>
    </div>
  );
};

export default ActivityCard;