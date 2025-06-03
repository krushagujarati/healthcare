import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MedEase. All rights reserved.</p>
      <p>Contact: support@medease.com</p>
    </footer>
  );
};

export default Footer;
