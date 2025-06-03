import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Component to change map view on coords update
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const hospitalsData = [
  {
    id: 1,
    name: "City Hospital",
    lat: 37.7749,
    lng: -122.4194,
    type: "General",
    rating: 4.5,
    address: "123 Main St, San Francisco, CA",
    contact: "123-456-7890",
  },
  {
    id: 2,
    name: "Care Clinic",
    lat: 37.7849,
    lng: -122.4094,
    type: "Clinic",
    rating: 4.0,
    address: "456 Market St, San Francisco, CA",
    contact: "987-654-3210",
  },
  {
    id: 3,
    name: "Specialty Center",
    lat: 37.7649,
    lng: -122.4294,
    type: "Specialty",
    rating: 4.7,
    address: "789 Mission St, San Francisco, CA",
    contact: "555-123-4567",
  },
];

export default function MapLocator() {
  const [filterType, setFilterType] = useState("All");
  const [filterRating, setFilterRating] = useState("All");
  const [userLocation, setUserLocation] = useState(null);

  // Filter hospitals by type and rating
  const filteredHospitals = hospitalsData.filter((hospital) => {
    const typeMatch = filterType === "All" || hospital.type === filterType;
    const ratingMatch =
      filterRating === "All" || hospital.rating >= parseFloat(filterRating);
    return typeMatch && ratingMatch;
  });

  // Handle "Find hospitals near me"
  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Hospital Locator</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          className="border rounded p-2"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="General">General</option>
          <option value="Clinic">Clinic</option>
          <option value="Specialty">Specialty</option>
        </select>

        <select
          className="border rounded p-2"
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value)}
        >
          <option value="All">All Ratings</option>
          <option value="4">4.0+</option>
          <option value="4.5">4.5+</option>
          <option value="5">5.0</option>
        </select>

        <button
          onClick={handleGeolocation}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Find Hospitals Near Me
        </button>
      </div>

      {/* Map */}
      <MapContainer
        center={userLocation || [37.7749, -122.4194]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userLocation && <ChangeView center={userLocation} zoom={13} />}
        {filteredHospitals.map((hospital) => (
          <Marker key={hospital.id} position={[hospital.lat, hospital.lng]}>
            <Popup>
              <strong>{hospital.name}</strong>
              <br />
              Type: {hospital.type}
              <br />
              Rating: {hospital.rating}
              <br />
              Address: {hospital.address}
              <br />
              Contact: {hospital.contact}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Hospital Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredHospitals.map((hospital) => (
          <div
            key={hospital.id}
            className="border rounded p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{hospital.name}</h3>
            <p>Type: {hospital.type}</p>
            <p>Rating: {hospital.rating}</p>
            <p>{hospital.address}</p>
            <p>Contact: {hospital.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
