import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    password: "",
    address: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const response = await res.json();
    if (response?.success) {
      alert("Register Successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        bloodGroup: "",
        password: "",
        city: "",
        address: "",
        role: "",
      });
    }
    console.log(response);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-black p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-2">
          🩸 Blood Bank Registration
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Become a donor and help save lives
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
          />

          {/* Blood Group */}
          {/* Blood Group - Only for Donor */}
          {formData.role !== "hospital" && (
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required={formData.role === "donor"}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
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
          )}

          {/* ✅ Role Selection */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none md:col-span-2"
          >
            <option value="">Select Role</option>
            <option value="donor">Donor</option>
            <option value="hospital">Hospital</option>
          </select>

          {/* Address */}
          <input
            type="text"
            name="address"
            placeholder="City / Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none col-span-1 md:col-span-2"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none col-span-1 md:col-span-2"
          />

          {/* Register Button */}
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition shadow-lg"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already registered?{" "}
          <NavLink
            to="/login"
            className="text-red-600 font-semibold hover:underline"
          >
            Login Here
          </NavLink>
        </p>
      </div>
    </div>
  );
}
