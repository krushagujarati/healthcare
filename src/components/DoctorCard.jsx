import React from "react";

const DoctorCard = ({ doctor }) => {
  const { name, specialty, rating } = doctor;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 mb-2">{specialty}</p>
        <p className="text-yellow-500 mb-4">
          {"⭐".repeat(rating)}{" "}
          <span className="text-gray-400">{5 - rating} stars</span>
        </p>
      </div>
      <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
