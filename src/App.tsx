import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Gallery from './components/Gallery';
import LandingPage from './components/LandingPage';
import Clubs from './components/Clubs';
import Updates from './components/Updates';
import Members from './components/Members';
import Activities from './components/Activities';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'gallery':
        return <Gallery />;
      case 'home':
        return <LandingPage />;
      case 'updates':
        return <Updates />;
      case 'activities':
        return <Activities />;
      case 'clubs':
        return <Clubs />; // ← This is the key change!
      case 'members':
        return <Members/>;
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
