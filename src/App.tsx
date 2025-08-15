import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Gallery from './components/Gallery';
import LandingPage from './components/LandingPage';
import Clubs from './components/Clubs';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'gallery':
        return <Gallery />;
      case 'home':
        return <LandingPage />;
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
        return <Clubs />; // ← This is the key change!
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
      <div className="sticky top-0 h-screen">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
