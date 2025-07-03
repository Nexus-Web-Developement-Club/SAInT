import React from 'react';

const ClubCard = ({ club, onClubClick }) => {
  return (
    <div
      onClick={onClubClick}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
    >
      <div className="p-8 text-center">
        <div className="text-6xl mb-4">{club.logo}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{club.name}</h3>
        <p className="text-gray-600 leading-relaxed">{club.description.substring(0, 100)}...</p>
        <div className="mt-6">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            Learn More →
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;