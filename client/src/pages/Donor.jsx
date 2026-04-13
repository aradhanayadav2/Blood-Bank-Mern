  
import React, { useState, useEffect } from "react";
import axios from "axios";

function Donor() {
  const [hospitals, setHospitals] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    phone: "",
    city: "",
    hospitalName: "",
    units: "",
    lastDonationDate: "",
  });

  // Fetch hospitals properly
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}/auth/hospitals`);
        console.log("Hospitals API:", res.data);

        // Ensure array format
        if (Array.isArray(res.data)) {
          setHospitals(res.data);
        } else if (res.data.hospitals) {
          setHospitals(res.data.hospitals);
        } else {
          setHospitals([]);
        }
      } catch (err) {
        console.log(err);
        setHospitals([]);
      }
    };

    fetchHospitals();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.hospitalName) {
      alert("Please select a hospital");
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API}/api/donors`, {
        ...formData,
        age: Number(formData.age),
        units: Number(formData.units),
      });

      await axios.post(`${import.meta.env.VITE_API}/api/inventory`, {
        hospitalName: formData.hospitalName,
        bloodGroup: formData.bloodGroup,
        units: Number(formData.units),
      });

      await axios.post(`${import.meta.env.VITE_API}/api/donations`, {
        donorName: formData.name,
        bloodGroup: formData.bloodGroup,
        units: Number(formData.units),
        hospitalName: formData.hospitalName,
      });

      alert("Blood Donated Successfully!");

      // Reset form
      setFormData({
        name: "",
        age: "",
        bloodGroup: "",
        phone: "",
        city: "",
        hospitalName: "",
        units: "",
        lastDonationDate: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error submitting donation");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Donate Blood
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Fully Editable Fields */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>B+</option>
            <option>O+</option>
            <option>AB+</option>
            <option>A-</option>
            <option>B-</option>
            <option>O-</option>
            <option>AB-</option>
          </select>

          <input
            type="number"
            name="units"
            placeholder="Units (e.g. 1)"
            value={formData.units}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* FIXED Hospital Dropdown */}
          <select
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Hospital</option>

            {hospitals.length > 0 ? (
              hospitals.map((h, index) => (
                <option key={index} value={h.name || h.hospitalName}>
                  {(h.name || h.hospitalName) + " - " + (h.city || "")}
                </option>
              ))
            ) : (
              <option disabled>No hospitals available</option>
            )}
          </select>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter City"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="date"
            name="lastDonationDate"
            value={formData.lastDonationDate}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition"
          >
            Donate Blood
          </button>
        </form>
      </div>
    </div>
  );
}

export default Donor;
