import React, { useState, useEffect } from "react";
import DoctorCard from "../components/DoctorCard";
import "../styles/doctorfinder.css";  // Custom CSS import

const specialties = ["Cardiology", "Dermatology", "Neurology", "Pediatrics", "Orthopedics"];
const genders = ["Male", "Female", "Other"];
const ratings = [5, 4, 3, 2, 1];

const allDoctors = [
  {
    id: 1,
    name: "Dr. Alice Smith",
    specialty: "Cardiology",
    location: "New York",
    gender: "Female",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Bob Johnson",
    specialty: "Dermatology",
    location: "Los Angeles",
    gender: "Male",
    rating: 4,
  },
  {
    id: 3,
    name: "Dr. Carol White",
    specialty: "Neurology",
    location: "Chicago",
    gender: "Female",
    rating: 5,
  },
  // add more doctors...
];

const ITEMS_PER_PAGE = 6;

const DoctorFinder = () => {
  const [filters, setFilters] = useState({
    specialty: "",
    location: "",
    gender: "",
    rating: "",
  });

  const [page, setPage] = useState(1);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    let filtered = allDoctors;

    if (filters.specialty) {
      filtered = filtered.filter((doc) => doc.specialty === filters.specialty);
    }
    if (filters.location) {
      filtered = filtered.filter((doc) =>
        doc.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.gender) {
      filtered = filtered.filter((doc) => doc.gender === filters.gender);
    }
    if (filters.rating) {
      filtered = filtered.filter((doc) => doc.rating >= parseInt(filters.rating));
    }

    setFilteredDoctors(filtered);
    setPage(1);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Pagination
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const pagedDoctors = filteredDoctors.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE);

  return (
    <div className="doctor-finder-container">
      <h1 className="doctor-finder-title">Find a Doctor</h1>

      <div className="filters-container">
        <select
          name="specialty"
          value={filters.specialty}
          onChange={handleFilterChange}
          className="filter-input"
        >
          <option value="">All Specialties</option>
          {specialties.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
          className="filter-input"
        />

        <select
          name="gender"
          value={filters.gender}
          onChange={handleFilterChange}
          className="filter-input"
        >
          <option value="">Any Gender</option>
          {genders.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <select
          name="rating"
          value={filters.rating}
          onChange={handleFilterChange}
          className="filter-input"
        >
          <option value="">Any Rating</option>
          {ratings.map((r) => (
            <option key={r} value={r}>
              {r} & up
            </option>
          ))}
        </select>
      </div>

      <div className="doctors-grid">
        {pagedDoctors.length === 0 ? (
          <p className="no-results">No doctors found with current filters.</p>
        ) : (
          pagedDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="pagination-btn"
          >
            Prev
          </button>
          <span className="pagination-info">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="pagination-btn"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorFinder;
