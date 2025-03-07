import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Stall from './pages/Stall/Stall';


function App() {

  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path='/stall' element={<Stall/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

