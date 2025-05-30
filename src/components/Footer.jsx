import React from 'react';
import '../styles/Footer.css'; // Import your new styles

const Footer = () => {
  return (
    <footer>
      <div className="footer-container container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h5>MedEase Healthcare</h5>
            <p>
              Empowering your health with easy bookings and trusted information.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/doctors">Doctors</a></li>
              <li><a href="/booking">Book Appointment</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 MedEase
      </div>
    </footer>
  );
};

export default Footer;
