import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/LabResults/Home';
import LabResults from './components/LabResults/LabResults';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/Lab-results" element={<LabResults />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
