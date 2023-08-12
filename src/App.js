import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import ChatForum from './Components/ChatForum/ChatForum';


import Signup from "./Components/auth/Signup.js"
import Login from "./Components/auth/Login.js"
import Profile from "./Components/auth/Profile.js"
import LandingPage from './Components/LandingPage.js'
import NavBar from "./Components/NavBar.js";
import DoctorDashboard from "./Components/doctor/DoctorDashboard.js";
import PatientDashboard from "./Components/patient/PatientDashboard.js";


import { fetchAppointments } from './Features/appointmentsSlice.js'
import { fetchPatients } from './Features/patientsSlice.js'
import { fetchResults } from './Features/resultsSlice.js'


import PortalUser from './Components/PortalUser/PortalUser.js';
import PortalPatients from './Components/PortalPatients/PortalPatients.js'
import PortalAppts from './Components/PortalAppts/PortalAppts.js';
import PortalLabResultsPage from './Components/PortalLabResultsPage/PortalLabResultsPage.js';
import PortalCalendar from './Components/PortalCalendar/PortalCalendar.js'


// import DietBlog from './Components/DietBlog/DietBlog';
import Blog from './Components/DietBlog/Blog';

function App() {
  const [user, setUser] = useState({})
  function handleSetUser (data){
    setUser(data)
  }

  const [search, setSearch] = useState('')



  const [patientAppts, setPatientAppts] = useState([])
  const [patientNames, setPatientNames] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppointments())

    .then(dispatch(fetchPatients()))

    .then(dispatch(fetchResults()))
  }, [dispatch]);


  const patients = useSelector(state => state.patients.entities)

  const results = useSelector(state => state.results.entities)
  const docAppointments = useSelector(state => state.appointments.entities)

  useEffect(() => {
    if(user && !user.doc){
      setPatientAppts(docAppointments.filter(appt => appt.patient_id === user.id))
    }
    if(user && user.doc){
      setPatientNames(patients.map(p => ({id: p.id, text: p.name})))
    }
  }, [user])

  const filterPatients = () => {
    if(search === '' ){
      return patients
    } else {
      return patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }
  }


  return (
    <div className="App">
    <BrowserRouter>
    <NavBar user={user} />
        <Routes>
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/signup" element={<Signup handleSetUser={handleSetUser}/>}/>
          <Route path="/login" element={<Login  handleSetUser={handleSetUser}/>}/>
          <Route path="/profile" element={<Profile user={user} />}/>
          <Route path="/Chat-forum" element={<ChatForum />} />
          <Route path = '/portal' element={<PortalUser user={user} />}/>
          <Route path = '/portal/patients' element={<PortalPatients patients={filterPatients()} docAppointments={docAppointments} search={search} setSearch={setSearch} user={user} />}/>
          <Route path = '/portal/calendar' element={<PortalCalendar docAppointments={docAppointments} user={user} patientAppts={patientAppts} patients={patients} patientNames={patientNames} />}/>
          <Route path='/portal/appointments' element={<PortalAppts patientAppts={patientAppts} user={user} /> } />
          <Route path='/portal/labresults' element={<PortalLabResultsPage user={user} results={results} /> } />



      <Route path="/" element={<LandingPage />} />

        </Routes>
    </BrowserRouter>




    </div>
  );

}

export default App;
