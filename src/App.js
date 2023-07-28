import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/LabResults/Home';
import LabResults from './components/LabResults/LabResults';
import ChatForum from './components/LabResults/ChatForum/ChatForum';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/Lab-results" element={<LabResults />} />
          <Route path="/Chat-forum" element={<ChatForum />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
