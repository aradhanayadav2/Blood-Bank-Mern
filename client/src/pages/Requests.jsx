import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContextProvider } from "../context/UserContext";

function Requests() {
  const { user } = useContext(UserContextProvider);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    hospitalName: user?.name || "",
    bloodGroup: "",
    units: "",
    patientName: "",
    urgency: "",
    contact: "",
    city: user?.city || "",
    requestedBy: user?._id || "", // 🔥 future use (important)
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(`${import.meta.env.VITE_API}/api/requests`, formData);

      alert("Request Submitted Successfully!");

      setFormData({
        hospitalName: user?.name || "",
        bloodGroup: "",
        units: "",
        patientName: "",
        urgency: "",
        contact: "",
        city: user?.city || "",
        requestedBy: user?._id || "",
      });

    } catch (error) {
      console.log(error);
      alert("Error submitting request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Blood Request Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Hospital Name */}
          <input
            type="text"
            value={formData.hospitalName}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100"
          />

          {/* Patient Name */}
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={formData.patientName}
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
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>

          {/* Units */}
          <input
            type="number"
            name="units"
            placeholder="Units Required"
            value={formData.units}
            onChange={handleChange}
            required
            min="1"
            className="w-full p-3 border rounded-lg"
          />

          {/* Urgency */}
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Urgency</option>
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Critical">Critical</option>
          </select>

          {/* Contact */}
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* Hidden Fields */}
          <input type="hidden" name="city" value={formData.city} />
          <input type="hidden" name="requestedBy" value={formData.requestedBy} />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white p-3 rounded-lg transition ${
              loading
                ? "bg-gray-400"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Requests;