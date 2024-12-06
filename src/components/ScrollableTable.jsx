import React from 'react';
import './ScrollableTable.css';

const ScrollableTable = ({diagnostic_list}) => {
  const diagnostics = [
    { problem: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation' },
    { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured' },
    { problem: 'Asthma', description: 'Recurrent episodes of bronchial constriction', status: 'Inactive' },
    { problem: 'Osteoarthritis', description: 'Degenerative joint disease', status: 'Untracked' },
    { problem: 'Migraine', description: 'Severe headaches often accompanied by nausea', status: 'Under Observation' },
    { problem: 'Allergy', description: 'Hypersensitivity of the immune system', status: 'Inactive' },
    { problem: 'Hypothyroidism', description: 'Underactive thyroid gland', status: 'Cured' },
    { problem: 'Anemia', description: 'Lack of red blood cells or hemoglobin', status: 'Under Observation' },
    { problem: 'Obesity', description: 'Excessive body fat accumulation', status: 'Inactive' },
  ];

  return (
    <div className="scrollable-table-container">
      <h2 className="table-header">Diagnostic List</h2>
      {/* Wrapper for the scrollable table */}
      <div className="scrollable-table-wrapper">
        <table className="scrollable-table">
          <thead  > 
            
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
        
            </tr>
          </thead>
          <tbody>
            {diagnostic_list.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScrollableTable;
