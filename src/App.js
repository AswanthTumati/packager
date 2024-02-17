import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/HomePage';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
