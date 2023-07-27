import React from 'react';
import './LabResults.css'; 

const dummyLabResults = [
  {
    result_id: 1,
    result_date: '2023-07-26',
    result_details: 'Blood Test: Normal',
  },
  {
    result_id: 2,
    result_date: '2023-07-22',
    result_details: 'Urine Test: Abnormal (Infection)',
  },
  {
    result_id: 3,
    result_date: '2023-07-25',
    result_details: 'Blood Pressure: Normal',
  },
  {
    result_id: 4,
    result_date: '2023-07-26',
    result_details: 'ultra-sound: Normal',
  },
];

const LabResults = () => {
  return (
    <div className="container"> {/* Apply the 'container' class */}
      <h2 className="title">Lab Results</h2> {/* Apply the 'title' class */}
      {dummyLabResults.length > 0 ? (
        <ul className="list"> {/* Apply the 'list' class */}
          {dummyLabResults.map((result, index) => (
            <li key={result.result_id} className="listItem"> {/* Apply the 'listItem' class */}
              <p>Result {index + 1}</p>
              <p>Date: {result.result_date}</p>
              <p>Details: {result.result_details}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="noResults">No lab results available.</p> 
      )};
    </div>
  );
};

export default LabResults;