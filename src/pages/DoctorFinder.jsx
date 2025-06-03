import React, { useState, useEffect } from "react";
import DoctorCard from "../components/DoctorCard";

const specialties = ["Cardiology", "Dermatology", "Neurology", "Pediatrics", "Orthopedics"];
const genders = ["Male", "Female", "Other"];
const ratings = [5, 4, 3, 2, 1];

const allDoctors = [
  // Dummy data - in real app, fetch from API
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
  // add more doctors for demonstration...
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
      filtered = filtered.filter(
        (doc) => doc.specialty === filters.specialty
      );
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
    setPage(1); // reset to first page on filter change
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Pagination logic
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const pagedDoctors = filteredDoctors.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold mb-6">Find a Doctor</h1>

      {/* Filters */}
      <div className="bg-white p-6 rounded-md shadow-md mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Specialty */}
        <select
          name="specialty"
          value={filters.specialty}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">All Specialties</option>
          {specialties.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-3 py-2"
        />

        {/* Gender */}
        <select
          name="gender"
          value={filters.gender}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Any Gender</option>
          {genders.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        {/* Rating */}
        <select
          name="rating"
          value={filters.rating}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Any Rating</option>
          {ratings.map((r) => (
            <option key={r} value={r}>
              {r} & up
            </option>
          ))}
        </select>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pagedDoctors.length === 0 ? (
          <p className="text-center col-span-full">No doctors found with current filters.</p>
        ) : (
          pagedDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
          >
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorFinder;
