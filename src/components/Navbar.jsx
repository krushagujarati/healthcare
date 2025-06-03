import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          HealthCare
        </Link>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/doctors">Find Doctor</Link>
          </li>
          <li>
            <Link to="/hospitals">Hospitals</Link>
          </li>
          <li>
            <Link to="/login">Login/Profile</Link>
          </li>
        </ul>
        {/* Mobile menu button - optional */}
      </div>
    </nav>
  );
};

export default Navbar;
