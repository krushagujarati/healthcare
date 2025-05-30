// src/pages/Booking.jsx
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/Booking.css';

const Booking = () => {
  return (
    <Container className="mt-4">
      <h2>Book an Appointment</h2>
      <Form>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formDoctor" className="mb-3">
          <Form.Label>Select Doctor</Form.Label>
          <Form.Select>
            <option>Select...</option>
            <option>Dr. A. Sharma</option>
            <option>Dr. R. Mehta</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Book Now
        </Button>
      </Form>
    </Container>
  );
};

export default Booking;
