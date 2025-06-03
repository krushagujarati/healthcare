import React from "react";
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <p>
            HealthCare is dedicated to connecting patients with the best
            healthcare professionals and services in their area.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@healthcare.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Health St., Wellness City</p>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="https://www.instagram.com/krusha.gujarati/?hl=en">Terms of Service</a></li>
            <li><a href="https://www.instagram.com/krusha.gujarati/?hl=en">Privacy Policy</a></li>
          </ul>
          <div className="footer-socials">
            <a href="https://www.instagram.com/krusha.gujarati/?hl=en" aria-label="Facebook">👍</a>
            <a href="https://www.instagram.com/krusha.gujarati/?hl=en" aria-label="Twitter">🐦</a>
            <a href="https://www.instagram.com/krusha.gujarati/?hl=en" aria-label="Instagram">📸</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} HealthCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
