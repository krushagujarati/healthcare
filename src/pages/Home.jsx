// src/pages/Home.jsx
import React from 'react';
import { Container, Carousel, CardGroup, Card, Button } from 'react-bootstrap';
import '../styles/Home.css';
const Home = () => {
  return (
    <Container className="mt-4">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/1200x400" alt="First slide" />
          <Carousel.Caption>
            <h3>Trusted Healthcare at Your Fingertips</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://via.placeholder.com/1200x400" alt="Second slide" />
          <Carousel.Caption>
            <h3>Book Appointments Quickly</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 className="my-4 text-center">Our Services</h2>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>24/7 Doctors</Card.Title>
            <Card.Text>Consult expert doctors anytime, anywhere.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Online Booking</Card.Title>
            <Card.Text>Book your appointments instantly with ease.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Health Info</Card.Title>
            <Card.Text>Access reliable health information and tips.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <div className="text-center mt-4">
        <Button variant="primary" href="/booking">Book an Appointment</Button>
      </div>
    </Container>
  );
};

export default Home;
