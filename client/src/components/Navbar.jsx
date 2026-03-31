import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContextProvider } from "../context/UserContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser,logout } = useContext(UserContextProvider);
  console.log("user", user);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}

        <div className="text-2xl font-bold text-red-600 cursor-pointer">
          🩸 BloodBank
        </div>

        {/* Desktop Menu */}

        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li className="hover:text-red-600 cursor-pointer">
            <Link to="/">Home </Link>
          </li>
          <li className="hover:text-red-600 cursor-pointer">
            <Link to="/about">About </Link>
          </li>

          <li className="hover:text-red-600 cursor-pointer">
            <Link to="/contact">Contact </Link>
          </li>

          {user?.role == "hospital" && (
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/inventory">Inventory</Link>
            </li>
          )}


          {user?.role == "donor" && (
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/donordashboard">Donordashboard</Link>
            </li>
          )}

          {user && (
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/requests">Request Blood</Link>
            </li>
          )}

          {user?.role == "donor" && (
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/donor">Donate</Link>
            </li>
          )}

          {user?.role == "hospital" && (
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/hospital">Dashboard</Link>
            </li>
          )}

          {user?.role == "admin" && (
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/admin">Admin</Link>
            </li>
          )}
        </ul>

        {/* Buttons */}

        {!user ? (
          <div className="hidden md:flex space-x-4">
            <button className="px-5 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition">
              <Link to="/login">Login</Link>
            </button>

            <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow">
              <Link to="/register">Register</Link>
            </button>
          </div>
        ) : (
          <button className="px-5 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition">
            <p onClick={logout}>Logout</p>
          </button>
        )}

        {/* Mobile Menu Button */}

        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-6">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li className="hover:text-red-600 cursor-pointer">Home</li>
            <li className="hover:text-red-600 cursor-pointer">About</li>
            <li className="hover:text-red-600 cursor-pointer">Contact</li>
            <li className="hover:text-red-600 cursor-pointer">Donor</li>
            <li className="hover:text-red-600 cursor-pointer">Requests</li>
            <li className="hover:text-red-600 cursor-pointer">
              Donordashboard
            </li>
            <li className="hover:text-red-600 cursor-pointer">Inventory</li>
            <li className="hover:text-red-600 cursor-pointer">Hospital</li>
            <li className="hover:text-red-600 cursor-pointer">Admin</li>
          </ul>

          {user && (
            <div className="mt-4 flex flex-col space-y-3">
              <button className="border border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-50">
                Login
              </button>

              <button className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
                Register
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
