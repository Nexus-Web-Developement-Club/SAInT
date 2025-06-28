import React from 'react';
import Header from '../components/Header';
import ClubCard from '../components/ClubCard';
import { clubsData } from '../data/clubsData';

const ClubsList = ({ onClubClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header 
        title="Student Association of Information Technology"
        subtitle="Empowering future technologists"
      />
      
      <div className="max-w-7xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Clubs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(clubsData).map(([key, club]) => (
            <ClubCard
              key={key}
              club={club}
              onClubClick={() => onClubClick(key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubsList;