import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // ✅ FIX

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useContext(UserContext); // ✅ FIX
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const response = await res.json();

      if (response.success) {
        alert("Login Successfully");

        setUser(response.data);

        const role = response.data.role;

        if (role === "admin") {
          navigate("/admin");
        } else if (role === "hospital") {
          navigate("/hospital");
        } else if (role === "donor") {
          navigate("/donordashboard");
        } else {
          navigate("/");
        }
      } else {
        alert(response.message || "Login failed"); // ✅ added safety
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 via-white to-red-100 p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
        {/* LEFT SIDE */}
        <div className="bg-red-600 text-white flex flex-col justify-center items-center p-10">
          <h1 className="text-4xl font-bold mb-4">Blood Bank System 🩸</h1>

          <p className="text-red-100 text-center mb-8">
            Donate blood and save lives. Join our community of heroes.
          </p>

          <img
            src="https://images.unsplash.com/photo-1615461066159-fea0960485d5"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* EMAIL */}
            <div>
              <label className="block text-gray-600 mb-1">Email</label>

              <input
                type="email"
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-gray-600 mb-1">Password</label>

              <input
                type="password"
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                value={form.password}
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
            >
              Login
            </button>

            {/* REGISTER */}
            <p className="text-center text-gray-600">
              New user?{" "}
              <span className="text-red-600 font-semibold">
                <Link to="/register">Register here</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
