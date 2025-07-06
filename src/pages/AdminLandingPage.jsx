import { useState } from 'react';
import AdminLogin from "../components/AdminLogin";
import AdminSignup from "../components/AdminSignup";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function AdminLandingPage() {

  // with this state we will controll wether we render login or signup page
  const [mode, setMode] = useState("login");

  return (
    <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center py-5 px-3">
      <div className="bt-5 w-100 shadow p-4 rounded bg-white" style={{ maxWidth: "420px" }}>
        <div className="btn-group w-100 mb-4" role="group">
          <button
            className={`btn ${mode === 'login' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            className={`btn ${mode === 'signup' ? 'btn-secondary' : 'btn-outline-secondary'}`}
            onClick={() => setMode('signup')}
          >
            Signup
          </button>
        </div>

        {/* here I am rendering the login page or signup page depending upon 'mode' state */}
        {mode === "login" ? <AdminLogin /> : <AdminSignup />}
      </div>
    </div>
  );
}

export default AdminLandingPage;
