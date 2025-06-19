import React from 'react';

function StatusCards() {
  const data = [
    { label: 'Current Semester', value: '6th' },
    { label: 'Registration Status', icon: 'bi-check-circle-fill text-warning' },
    { label: 'Payment Status', icon: 'bi-check-circle-fill text-success' },
    { label: 'Current CGPA', value: '7.52' }
  ];

  return (
    <div className="row g-3 mb-3">
      {data.map((item, index) => (
        <div className="col-6 col-md-3 text-center" key={index}>
          <div className="border rounded p-3 bg-light">
            {item.icon ? (
              <i className={`bi ${item.icon} fs-4`}></i>
            ) : (
              <h5>{item.value}</h5>
            )}
            <small className="d-block mt-1">{item.label}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatusCards;
