import React from 'react';
import './LabResults.css';
import { FaDownload } from 'react-icons/fa'; // Using react-icons for the download icon

const LabResults = ({lab_results}) => {
  const results = [
    'Blood Tests',
    'CT Scans',
    'Radiology Reports',
    'X-Rays',
    'Urine Test',
  ];

  return (
    <div className="lab-results-container">
      <h2 className="lab-results-header">Lab Results</h2>
      <div className="lab-results-wrapper">
        <ul className="lab-results-list">
          {lab_results.map((result, index) => (
            <li key={index} className="lab-result-item">
              <span className="lab-result-name">{result}</span>
              <button className="download-button" aria-label={`Download ${result}`}>
               <img src={"../src/assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg"} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LabResults;
