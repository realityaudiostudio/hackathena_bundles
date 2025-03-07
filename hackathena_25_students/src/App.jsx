import React ,{useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Navbar from './components/Navbar/Navbar';
import Stall from './pages/Stall/Stall';
import Profile from './pages/Profile/Profile';
import Project from './pages/Project/Project';
import StallOpen from './components/StallOpen/StallOpen';
import { UserProvider } from './context/UserContext/UserContext';
import OneSignal from 'react-onesignal';
import Idcard from './pages/ID/Idcard';

function AppContent() {

  const location = useLocation();

  useEffect(() => {
    OneSignal.init({
      appId: "54669f06-be87-4386-9fe4-57f5bd87eb6a",
      serviceWorkerPath: "/OneSignalSDKWorker.js",
    });
  }, []);

  return (
    <UserProvider>
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stall" element={<Stall />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Project />} />
        <Route path="/stallopen" element={<StallOpen />} />
        <Route path="/id" element={<Idcard/>} />
      </Routes>
      {location.pathname !== "/login" && <Navbar className='mindaa' />}

    </>
    </UserProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
