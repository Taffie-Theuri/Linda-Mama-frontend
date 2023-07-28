import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./Components/auth/Signup.js"
import Login from "./Components/auth/Login.js"
import Profile from "./Components/auth/Profile.js"
import LandingPage from './Components/LandingPage.js'
import NavBar from "./Components/NavBar.js";
import DoctorDashboard from "./Components/doctor/DoctorDashboard.js";
import PatientDashboard from "./Components/patient/PatientDashboard.js";

function App() {
  const [user, setUser] = useState({})
  function handleSetUser (data){
    setUser(data)
  } 
  return (
    <>
    <Router>
      <NavBar user={user} />
      <Routes>
      <Route path="/signup" element={<Signup handleSetUser={handleSetUser}/>}/>
      <Route path="/login" element={<Login  handleSetUser={handleSetUser}/>}/>
      <Route path="/profile" element={<Profile user={user} />}/>
      <Route path="/doctor/dashboard" element={<DoctorDashboard user={user} />}/>
      <Route path="/patient/dashboard" element={<PatientDashboard user={user} />}/>
      

      <Route path="/" element={<LandingPage />} />
      </Routes>
      
    </Router>
    </>
  );
}

export default App;
