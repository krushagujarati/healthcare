import React from 'react';
import '../styles/Doctors.css';

const Doctors = () => {
  return (
    <div className="doctors-page">
      <h2>Our Doctors</h2>
      <div className="doctor-list">
        <div className="doctor-card">
          <h4>Dr. Priya Shah</h4>
          <p>Cardiologist</p>
        </div>
        <div className="doctor-card">
          <h4>Dr. Aman Patel</h4>
          <p>Neurologist</p>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
