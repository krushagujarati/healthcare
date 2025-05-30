// src/pages/Doctors.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Doctors.css';

const doctorsData = [
  {
    name: 'Dr. Anil Kumar',
    specialty: 'Cardiologist',
    experience: '15 years',
    img: 'https://www.fortishealthcare.com/frontend/uploads/doctor/doctor1.jpg',
  },
  {
    name: 'Dr. Meera Sharma',
    specialty: 'Orthopaedic Surgeon',
    experience: '12 years',
    img: 'https://www.fortishealthcare.com/frontend/uploads/doctor/doctor2.jpg',
  },
  {
    name: 'Dr. Rajesh Patel',
    specialty: 'Neurologist',
    experience: '20 years',
    img: 'https://www.fortishealthcare.com/frontend/uploads/doctor/doctor3.jpg',
  },
];

const Doctors = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Expert Doctors</h2>
      <Row>
        {doctorsData.map((doc, idx) => (
          <Col key={idx} md={4} className="mb-4">
            <Card className="doctor-card">
              <Card.Img variant="top" src={doc.img} alt={doc.name} />
              <Card.Body>
                <Card.Title>{doc.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{doc.specialty}</Card.Subtitle>
                <Card.Text>Experience: {doc.experience}</Card.Text>
                <Button variant="primary" href="/booking">
                  Book Appointment
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
