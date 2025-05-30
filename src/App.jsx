import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarComp from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Doctors from './pages/Doctors.jsx';
import Booking from './pages/Booking.jsx';
import './App.css';
import './styles/global.css';
import './styles/Doctors.css';
import './styles/Booking.css';
import './styles/Home.css';
import './styles/Footer.css';
import './styles/Navbar.css';


const App = () => {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
