import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import SignInPage from './pages/SignInPage';
import DashboardAgent from './pages/DashboardAgent';
import DashboardBuyer from './pages/DashboardBuyer';
import DashboardSeller from './pages/DashboardSeller';
import PropertiesPage from './pages/PropertiesPage';
import ClientsPage from './pages/ClientsPage';
import DocumentsPage from './pages/DocumentsPage';
import ProfilePage from './pages/ProfilePage';
import ThemeToggle from './components/ThemeToggle';
import { CssBaseline } from '@mui/joy';
import "./styles/Global.css";
import Sidebar from "./components/Sidebar";
import { CssVarsProvider } from '@mui/joy/styles';



function App() {


  return (
    <CssVarsProvider disableTransitionOnChange>
    <CssBaseline />
    <div style={{ display: 'flex' }}>
      {/* Only show Sidebar if not on the sign-in page */}


      <BrowserRouter>
            <Sidebar />
        <Routes>
          {/* Sign In Route */}
          <Route path="/" element={<SignInPage />} />

          {/* Dashboards by role */}
          <Route path="/agent/dashboard" element={<DashboardAgent />} />
          <Route path="/buyer/dashboard" element={<DashboardBuyer />} />
          <Route path="/seller/dashboard" element={<DashboardSeller />} />

          {/* Other routes */}
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  </CssVarsProvider>

  );
}

export default App;
