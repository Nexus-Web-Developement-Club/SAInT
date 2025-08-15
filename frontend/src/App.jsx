import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// User
import UserLayout from './components/user/UserLayout';
import LandingPage from './pages/user/LandingPage';
import Gallery from './pages/user/Gallery';
import Updates from './pages/user/Updates';
import Activities from './pages/user/Activities';
import Clubs from './pages/user/Clubs';
import Members from './pages/user/Members';

// Admin
import AdminLanding from './pages/admin/AdminLanding';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSignIn from './pages/admin/AdminSignIn';
import AdminSignUp from './pages/admin/AdminSignUp';

function App() {
  return (
    <Router>
      <Routes>
        {/* User routes with Sidebar */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/members" element={<Members />} />
        </Route>

        {/* Admin routes without Sidebar */}
        <Route path="/admin" element={<AdminLanding />} />
        <Route path="/admin/signin" element={<AdminSignIn />} />
        <Route path="/admin/signup" element={<AdminSignUp />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
