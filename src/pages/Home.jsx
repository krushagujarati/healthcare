import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h2>Welcome to MedEase</h2>
        <p>Your trusted healthcare booking partner</p>
        <Link to="/booking" className="btn-book">Book Appointment</Link>
      </section>

      <section className="services">
        <h3>Our Services</h3>
        <div className="cards">
          <div className="card">General Checkup</div>
          <div className="card">Specialist Consultation</div>
          <div className="card">Emergency Services</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
