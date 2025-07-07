import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ClubsList from './views/ClubsList';
import ClubDetail from './views/ClubDetail';
import ActivityDetail from './views/ActivityDetail';
import Header from './components/Header';

const App = () => {
  const [currentView, setCurrentView] = useState('clubs');
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activeSection, setActiveSection] = useState('clubs');

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

  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (section === 'clubs') {
      setCurrentView('clubs');
      setSelectedClub(null);
      setSelectedActivity(null);
    } else {
      // For other sections, you can add their respective views later
      setCurrentView(section);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'clubs':
        return <ClubsList onClubClick={handleClubClick} />;
      case 'club-detail':
        return (
          <ClubDetail
            selectedClub={selectedClub}
            onBackClick={handleBackClick}
            onActivityClick={handleActivityClick}
          />
        );
      case 'activity-detail':
        return (
          <ActivityDetail
            selectedActivity={selectedActivity}
            onBackClick={handleBackClick}
          />
        );
      case 'home':
        return (
          <div className="p-8">
            <Header 
              title="Welcome to SAInT" 
              subtitle="Student Association of Information Technology"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h2>
              <p className="text-gray-600">Select a section from the sidebar to get started</p>
            </div>
          </div>
        );
      case 'updates':
        return (
          <div className="p-8">
            <Header 
              title="Updates" 
              subtitle="Latest news and announcements"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Updates</h2>
              <p className="text-gray-600">Updates section coming soon...</p>
            </div>
          </div>
        );
      case 'activities':
        return (
          <div className="p-8">
            <Header 
              title="Activities" 
              subtitle="Upcoming events and activities"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Activities</h2>
              <p className="text-gray-600">Activities section coming soon...</p>
            </div>
          </div>
        );
      case 'members':
        return (
          <div className="p-8">
            <Header 
              title="Members" 
              subtitle="Our community members"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Members</h2>
              <p className="text-gray-600">Members section coming soon...</p>
            </div>
          </div>
        );
      case 'gallery':
        return (
          <div className="p-8">
            <Header 
              title="Gallery" 
              subtitle="Photos and memories"
            />
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Gallery</h2>
              <p className="text-gray-600">Gallery section coming soon...</p>
            </div>
          </div>
        );
      default:
        return <ClubsList onClubClick={handleClubClick} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange}
      />
      
      {/* Main Content */}
      <div className="flex-1 ml-64 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;