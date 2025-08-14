import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Gallery from './components/Gallery';

function App() {
  const [activeTab, setActiveTab] = useState('gallery');

  const renderContent = () => {
    switch (activeTab) {
      case 'gallery':
        return <Gallery />;
      case 'home':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to SAInT</h1>
              <p className="text-xl text-gray-600">Student Association of Information Technology</p>
            </div>
          </div>
        );
      case 'updates':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Updates</h1>
              <p className="text-xl text-gray-600">Stay updated with latest news and announcements</p>
            </div>
          </div>
        );
      case 'activities':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Activities</h1>
              <p className="text-xl text-gray-600">Explore our various activities and events</p>
            </div>
          </div>
        );
      case 'clubs':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Clubs</h1>
              <p className="text-xl text-gray-600">Discover different clubs and communities</p>
            </div>
          </div>
        );
      case 'members':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Members</h1>
              <p className="text-xl text-gray-600">Meet our amazing community members</p>
            </div>
          </div>
        );
      default:
        return <Gallery />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;