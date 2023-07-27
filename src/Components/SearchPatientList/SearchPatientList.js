import React from 'react'
import PatientList from '../PatientList/PatientList.js'
import './SearchPatient.css'

function PortalAppts({ search, setSearch, patients, docAppointments, user }) {

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <PortalNav user={user} />
      <div className='search'>
        <label>
          Search Patient:
          <input type='text' placeholder='patient name...' className='patientSearch' onChange={handleChange} value={search} />
        </label>
      </div>
      <br></br>
      <div className='appt-list' >
      { patients.map(p => {
        return (
          <PatientList key={p.id} patient={p} docAppointments={docAppointments} />
        )
      }) }
      </div>
    </div>
  )
}

export default PortalAppts