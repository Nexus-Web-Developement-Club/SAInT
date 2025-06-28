import React, { useState } from 'react';
import ClubsList from './views/ClubsList';
import ClubDetail from './views/ClubDetail';
import ActivityDetail from './views/ActivityDetail';

const App = () => {
  const [currentView, setCurrentView] = useState('clubs');
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleClubClick = (clubKey) => {
    setSelectedClub(clubKey);
    setCurrentView('club-detail');
  };

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setCurrentView('activity-detail');
  };

  const handleBackClick = () => {
    if (currentView === 'activity-detail') {
      setCurrentView('club-detail');
      setSelectedActivity(null);
    } else if (currentView === 'club-detail') {
      setCurrentView('clubs');
      setSelectedClub(null);
    }
  };

  return (
    <div>
      {currentView === 'clubs' && (
        <ClubsList onClubClick={handleClubClick} />
      )}
      {currentView === 'club-detail' && (
        <ClubDetail
          selectedClub={selectedClub}
          onBackClick={handleBackClick}
          onActivityClick={handleActivityClick}
        />
      )}
      {currentView === 'activity-detail' && (
        <ActivityDetail
          selectedActivity={selectedActivity}
          onBackClick={handleBackClick}
        />
      )}
    </div>
  );
};

export default App;