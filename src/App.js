import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LabResults from './components/LabResults/LabResults';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          
          
          <Route path="/Lab-results" element={<LabResults />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
