// src/pages/Home.jsx
import React from 'react';

import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonial from '../components/Testimonial';


const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonial />
      
    </div>
  );
};

export default Home;
