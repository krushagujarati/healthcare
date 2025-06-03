import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          HealthCare
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/doctors">Find Doctor</Link></li>
          <li><Link to="/hospitals">Hospitals</Link></li>
          <li><Link to="/login">Login/Profile</Link></li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-3 text-gray-700 font-medium">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/doctors" onClick={() => setMenuOpen(false)}>Find Doctor</Link></li>
          <li><Link to="/hospitals" onClick={() => setMenuOpen(false)}>Hospitals</Link></li>
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login/Profile</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
