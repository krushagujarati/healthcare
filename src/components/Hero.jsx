import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Find Doctors Near You
      </h1>
      <p className="max-w-xl mx-auto mb-8 text-lg md:text-xl">
        Connect with trusted healthcare professionals quickly and easily.
      </p>
      <Link
        to="/doctors"
        className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
      >
        Search Doctors
      </Link>
      <div className="mt-12">
        <img
          src="/assets/doctor-hero.jpg"
          alt="Doctor consultation"
          className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
