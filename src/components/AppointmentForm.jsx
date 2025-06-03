import React, { useState } from 'react';
import '../styles/appointmentForm.css';

const AppointmentForm = ({ doctorName = "Dr. John Doe" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Data:', formData);
    alert('Appointment booked successfully!');
    setFormData({ name: '', email: '', date: '', time: '', reason: '' });
  };

  return (
    <div className="appointment-form-container">
      <h2>Book an Appointment with <span>{doctorName}</span></h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Reason:
          <textarea
            name="reason"
            placeholder="Brief description of symptoms"
            value={formData.reason}
            onChange={handleChange}
            rows={3}
            required
          />
        </label>

        <button type="submit">Confirm Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
