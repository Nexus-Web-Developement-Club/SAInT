import React, { useState } from 'react';
import { Users, Calendar } from 'lucide-react';
import Header from '../components/Header';
import ActivityCard from '../components/ActivityCard';
import MemberCard from '../components/MemberCard';
import { clubsData } from '../data/clubsData';

const ClubDetail = ({ selectedClub, onBackClick, onActivityClick }) => {
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  const [showMembers, setShowMembers] = useState(false);
  
  const club = clubsData[selectedClub];
  if (!club) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header 
        title={club.name}
        subtitle="Club Details & Activities"
        logo={club.logo}
        showBackButton={true}
        onBackClick={onBackClick}
      />

      <div className="max-w-7xl mx-auto p-8">
        {/* Club Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center text-8xl mb-6">{club.logo}</div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{club.name}</h2>
          <p className="text-gray-600 text-lg text-center leading-relaxed mb-8">{club.description}</p>
          
          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setShowMembers(!showMembers)}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Users className="w-5 h-5" />
              <span>{showMembers ? 'Hide Members' : 'View Members'}</span>
            </button>
          </div>

          {/* Members List */}
          {showMembers && (
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Club Members
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {club.members.map((member, index) => (
                  <MemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Year Selector */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Activities</h3>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-blue-50 border-2 border-blue-200 rounded-lg px-4 py-2 text-blue-800 font-medium focus:outline-none focus:border-blue-400"
            >
              <option value="2024-2025">2024-2025</option>
              <option value="2023-2024">2023-2024</option>
            </select>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {club.activities[selectedYear]?.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                onActivityClick={() => onActivityClick(activity)}
              />
            )) || (
              <div className="col-span-2 text-center py-12 text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No activities found for {selectedYear}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetail;