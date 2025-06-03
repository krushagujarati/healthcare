import React, { useState } from 'react';
import '../styles/Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} on ${formData.date}`);
  };

  return (
    <div className="booking-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <select name="department" onChange={handleChange} required>
          <option value="">Select Department</option>
          <option value="cardio">Cardiology</option>
          <option value="neuro">Neurology</option>
        </select>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
