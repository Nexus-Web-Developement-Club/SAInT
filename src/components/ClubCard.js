import React from 'react';
// Import club logos
import nexusLogo from '../assets/images/clubs/nexus-logo.png';
import cyberbortLogo from '../assets/images/clubs/cyberbort-logo.png';
import aiLogo from '../assets/images/clubs/nexus-logo.png';
import iotLogo from '../assets/images/clubs/nexus-logo.png';
import socialActivityLogo from '../assets/images/clubs/nexus-logo.png';
import placeholderLogo from '../assets/images/clubs/nexus-logo.png';

const ClubCard = ({ club, onClubClick }) => {
  // Map club names to their logo images
  const getClubLogo = (clubName) => {
    const logoMap = {
      'nexus': nexusLogo,
      'cyberbort': cyberbortLogo,
      'ai': aiLogo,
      'iot': iotLogo,
      'social-activity': socialActivityLogo,
      'social activity cell': socialActivityLogo,
      'meet the achievers': placeholderLogo
    };
    
    const clubKey = clubName.toLowerCase().replace(/\s+/g, '-');
    return logoMap[clubKey] || placeholderLogo;
  };

  return (
    <div
      onClick={onClubClick}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
    >
      <div className="p-8 text-center">
        {/* Club Logo Image */}
        <div className="mb-4 flex justify-center">
          <img 
            src={getClubLogo(club.name)} 
            alt={`${club.name} logo`}
            className="w-16 h-16 object-contain rounded-full bg-gray-50 p-2 shadow-sm"
            onError={(e) => {
              // Fallback to emoji if image fails
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="text-6xl hidden">{club.logo}</div>
        </div>
        
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