import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const availableTimeSlots = {
  // Example: date => available slots
  "2025-06-03": ["09:00 AM", "10:00 AM", "02:00 PM"],
  "2025-06-04": ["11:00 AM", "01:00 PM", "03:00 PM"],
  // Default slots if date not found
  default: ["09:00 AM", "10:30 AM", "01:00 PM", "04:00 PM"],
};

const mockDoctor = {
  name: "Dr. Alice Smith",
  specialty: "Cardiology",
  picture: "https://randomuser.me/api/portraits/women/44.jpg",
  experience: "10 years",
  location: "New York",
};

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  // Simulate logged-in user (set false to test login prompt)
  const isUserLoggedIn = true;

  useEffect(() => {
    if (selectedDate) {
      setTimeSlots(availableTimeSlots[selectedDate] || availableTimeSlots.default);
      setSelectedTime("");
    }
  }, [selectedDate]);

  const handleConfirm = () => {
    if (!isUserLoggedIn) {
      toast.error("Please log in to confirm booking.");
      return;
    }
    if (!selectedDate || !selectedTime) {
      toast.error("Please select date and time.");
      return;
    }
    toast.success(`Appointment confirmed on ${selectedDate} at ${selectedTime}`);
    // Reset or redirect as needed
    setStep(1);
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Book Appointment</h1>

      {/* Doctor Info Header */}
      <div className="flex items-center space-x-4 mb-8">
        <img
          src={mockDoctor.picture}
          alt={mockDoctor.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{mockDoctor.name}</h2>
          <p className="text-gray-600">{mockDoctor.specialty}</p>
          <p className="text-gray-500 text-sm">{mockDoctor.experience} experience</p>
          <p className="text-gray-500 text-sm">{mockDoctor.location}</p>
        </div>
      </div>

      {/* Step 1: Date Picker */}
      {step === 1 && (
        <div className="mb-6">
          <label htmlFor="date" className="block font-medium mb-2">
            Choose Appointment Date
          </label>
          <input
            type="date"
            id="date"
            min={new Date().toISOString().split("T")[0]} // no past dates
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {selectedDate && (
            <button
              onClick={() => setStep(2)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Next: Select Time
            </button>
          )}
        </div>
      )}

      {/* Step 2: Time Slots */}
      {step === 2 && (
        <div className="mb-6">
          <h3 className="font-medium mb-2">Select a Time Slot for {selectedDate}</h3>
          {timeSlots.length === 0 ? (
            <p>No time slots available for this date.</p>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded border ${
                    selectedTime === time
                      ? "bg-blue-600 text-white"
                      : "bg-white hover:bg-blue-100"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          )}

          <div className="mt-6 flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 rounded border hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={() => selectedTime && setStep(3)}
              disabled={!selectedTime}
              className={`px-4 py-2 rounded text-white ${
                selectedTime ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirm */}
      {step === 3 && (
        <div className="mb-6 text-center">
          <p className="text-lg mb-4">
            Confirm your appointment on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>?
          </p>
          <button
            onClick={handleConfirm}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Yes, Confirm
          </button>
          <div className="mt-4">
            <button
              onClick={() => setStep(2)}
              className="text-gray-600 underline"
            >
              Change Time
            </button>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Booking;
