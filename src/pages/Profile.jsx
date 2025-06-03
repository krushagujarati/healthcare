import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  // Default values to prevent errors if auth or user is undefined initially
  const user = auth?.user || {};
  const logout = auth?.logout || (() => {});
  const updateUser = auth?.updateUser || (() => {});

  // Simulated appointments data
  const [appointments] = useState([
    { id: 1, doctor: "Dr. Smith", date: "2025-06-10", status: "Booked" },
    { id: 2, doctor: "Dr. Jane", date: "2025-05-20", status: "Completed" },
  ]);

  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");

  if (!auth) return <p>Loading auth...</p>;
  if (!user || !user.name) return <p>No user is logged in.</p>;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSave = () => {
    updateUser({ email, phone });
    alert("Profile updated!");
  };

  return (
    <div className="profile-container">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <img
          src={user.photoURL || "https://via.placeholder.com/80"}
          alt="Profile"
          className="profile-image"
        />
        <h1 className="welcome-text">Welcome, {user.name || "User"}!</h1>
      </div>

      {/* Upcoming Appointments */}
      <section className="appointments-section">
        <h2>Upcoming Appointments</h2>
        {appointments.length === 0 ? (
          <p>No upcoming appointments.</p>
        ) : (
          <ul className="appointments-list">
            {appointments.map(({ id, doctor, date, status }) => (
              <li
                key={id}
                className={`appointment-item ${
                  status === "Completed"
                    ? "appointment-completed"
                    : "appointment-booked"
                }`}
              >
                <div>
                  <p><strong>Doctor:</strong> {doctor}</p>
                  <p><strong>Date:</strong> {date}</p>
                </div>
                <span
                  className={`status-badge ${
                    status === "Completed"
                      ? "status-completed"
                      : "status-booked"
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
      <section className="edit-profile-section">
        <h2>Edit Profile</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="edit-profile-form"
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </section>

      {/* Logout Button */}
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Profile;
