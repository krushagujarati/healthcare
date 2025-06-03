import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Simulated appointments data (replace with API data)
  const [appointments, setAppointments] = useState([
    { id: 1, doctor: "Dr. Smith", date: "2025-06-10", status: "Booked" },
    { id: 2, doctor: "Dr. Jane", date: "2025-05-20", status: "Completed" },
  ]);

  // For edit profile form
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSave = () => {
    // Basic validation can be added
    updateUser({ email, phone });
    alert("Profile updated!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Welcome Banner */}
      <div className="flex items-center gap-4 mb-8">
        <img
          src={user.photoURL || "https://via.placeholder.com/80"}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <h1 className="text-3xl font-semibold">Welcome, {user.name || "User"}!</h1>
      </div>

      {/* Upcoming Appointments */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Appointments</h2>
        {appointments.length === 0 ? (
          <p>No upcoming appointments.</p>
        ) : (
          <ul className="space-y-3">
            {appointments.map(({ id, doctor, date, status }) => (
              <li
                key={id}
                className={`p-4 border rounded flex justify-between items-center ${
                  status === "Completed"
                    ? "bg-green-100 border-green-400"
                    : "bg-yellow-100 border-yellow-400"
                }`}
              >
                <div>
                  <p>
                    <strong>Doctor:</strong> {doctor}
                  </p>
                  <p>
                    <strong>Date:</strong> {date}
                  </p>
                </div>
                <span
                  className={`font-semibold px-3 py-1 rounded ${
                    status === "Completed"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Edit Profile */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="space-y-4 max-w-md"
        >
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-medium mb-1">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-3 py-2 border rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </section>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
