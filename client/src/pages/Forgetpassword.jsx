import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${import.meta.env.VITE_API}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    console.log(import.meta.env.VITE_API);

    const data = await res.json();

    if (data.success) {
      alert("Check console for reset link");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 via-white to-red-100 px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-red-600 mb-2">
          Forgot Password 🔐
        </h2>

        <p className="text-gray-500 text-center mb-6 text-sm">
          Enter your registered email to receive a password reset link
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email Input */}
          <div>
            <label className="block text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to login */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Remember your password?{" "}
          <a href="/" className="text-red-600 font-semibold hover:underline">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}