import React from "react";
import { Link } from "react-router-dom";
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Find Doctors Near You</h1>
      <p className="hero-description">
        Connect with trusted healthcare professionals quickly and easily.
      </p>
      <Link to="/doctors" className="hero-button">
        Search Doctors
      </Link>
      <div className="hero-image-container">
        <img
          src="/assets/p1.jpg"
          alt="Doctor consultation"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
