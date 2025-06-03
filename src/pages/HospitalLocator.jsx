// src/pages/HospitalLocator.jsx
import React, { useState, useEffect } from 'react';
import HospitalCard from '../components/HospitalCard';
import "../styles/hospitallocator.css";

const dummyHospitals = [
  {
    id: 1,
    name: "City Hospital",
    address: "123 Main St, Springfield",
    phone: "555-1234",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1576765607924-6a15236a5f94?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    name: "Green Valley Medical Center",
    address: "456 Elm St, Springfield",
    phone: "555-5678",
    rating: 4.2,
    imageUrl: "https://images.unsplash.com/photo-1588776814546-daa7b237dd93?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    name: "Sunrise Hospital",
    address: "789 Oak St, Springfield",
    phone: "555-9012",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=60"
  }
];

export default function HospitalLocator() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Simulate API call with dummy data
    setTimeout(() => {
      setHospitals(dummyHospitals);
    }, 500);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Find Hospitals Near You</h1>

      {hospitals.length === 0 ? (
        <p className="text-center text-gray-500">Loading hospitals...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {hospitals.map(hospital => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))}
        </div>
      )}
    </div>
  );
}
