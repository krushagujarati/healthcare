import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-section">
          <span className="logo-icon">❗</span>
          <Link to="/" className="logo-text">MadeEASY</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/doctors" className="nav-item">Find Doctor</Link></li>
          <li><Link to="/hospitals" className="nav-item">Hospitals</Link></li>
          <li><Link to="/appointment" className="nav-item">Appointment</Link></li>
          <li><Link to="/about" className="nav-item">About Us</Link></li>
          <li>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg viewBox="0 0 24 24" className="hamburger-icon">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mobile-menu">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/doctors" onClick={() => setMenuOpen(false)}>Find Doctor</Link></li>
          <li><Link to="/hospitals" onClick={() => setMenuOpen(false)}>Hospitals</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="login-btn">Login</button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
