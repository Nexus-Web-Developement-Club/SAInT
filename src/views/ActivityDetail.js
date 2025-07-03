import React from 'react';
import { User, Calendar, MapPin } from 'lucide-react';
import Header from '../components/Header';

const ActivityDetail = ({ selectedActivity, onBackClick }) => {
  if (!selectedActivity) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header 
        title={selectedActivity.title}
        subtitle="Activity Details"
        showBackButton={true}
        onBackClick={onBackClick}
      />

      <div className="max-w-5xl mx-auto p-8">
        {/* Activity Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center underline decoration-blue-500">
            {selectedActivity.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <User className="w-6 h-6 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-700">Faculty Coordinator:</span>
              </div>
              <p className="text-gray-800 font-medium">{selectedActivity.coordinator}</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-700">Date:</span>
              </div>
              <p className="text-gray-800 font-medium">{selectedActivity.date}</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-700">Location:</span>
              </div>
              <p className="text-gray-800 font-medium text-sm">{selectedActivity.location}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Information about the session:</h3>
            <p className="text-gray-600 leading-relaxed">{selectedActivity.description}</p>
            <div className="mt-4 text-gray-500">
              <p>• Session details and objectives</p>
              <p>• Learning outcomes and benefits</p>
              <p>• Participant engagement activities</p>
              <p>• Technical skill development focus</p>
              <p>• Industry-relevant practical applications</p>
            </div>
          </div>

          {/* Images Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedActivity.images.map((image, index) => (
              <div key={index} className="border-4 border-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`${selectedActivity.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;