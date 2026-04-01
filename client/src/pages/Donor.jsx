import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContextProvider } from "../context/UserContext";

function Donor() {
  const { user } = useContext(UserContextProvider);

  const [hospitals, setHospitals] = useState([]);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    age: "",
    bloodGroup: user?.bloodGroup || "",
    phone: user?.phone || "",
    city: user?.city || "",
    hospitalName: "",
    units: "",
    lastDonationDate: "",
  });

  // 🔥 fetch hospitals
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/auth/hospitals`)
      .then((res) => setHospitals(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Save donor
      await axios.post(`${import.meta.env.VITE_API}/api/donors`, formData);

      // 2️⃣ Update inventory
      await axios.post(`${import.meta.env.VITE_API}/api/inventory`, {
        hospitalName: formData.hospitalName,
        bloodGroup: formData.bloodGroup,
        units: formData.units,
      });

      // 🔥 3️⃣ SAVE DONATION IN DB (IMPORTANT FIX)
      await axios.post(`${import.meta.env.VITE_API}/api/donations`, {
        donorName: formData.name,
        bloodGroup: formData.bloodGroup,
        units: formData.units,
        hospitalName: formData.hospitalName,
      });

      alert("Blood Donated Successfully!");

      setFormData({
        name: user?.name || "",
        age: "",
        bloodGroup: user?.bloodGroup || "",
        phone: user?.phone || "",
        city: user?.city || "",
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

          {/* Name */}
          <input
            type="text"
            value={formData.name}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100"
          />

          {/* Age */}
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* Blood Group */}
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

          {/* Units */}
          <input
            type="number"
            name="units"
            placeholder="Units (e.g. 1)"
            value={formData.units}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* 🏥 Hospital Dropdown */}
          <select
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Hospital</option>

            {hospitals.map((h, index) => (
              <option key={index} value={h.name}>
                {h.name} ({h.city})
              </option>
            ))}
          </select>

          {/* Phone */}
          <input
            type="text"
            value={formData.phone}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100"
          />

          {/* City */}
          <input
            type="text"
            value={formData.city}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100"
          />

          {/* Last Donation */}
          <input
            type="date"
            name="lastDonationDate"
            value={formData.lastDonationDate}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          {/* Submit */}
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