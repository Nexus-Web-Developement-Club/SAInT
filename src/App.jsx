import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLandingPage from './pages/AdminLandingPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin-landing-page' element={<AdminLandingPage />}/>
        <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
