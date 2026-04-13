import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // ✅ FIXED

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logout } = useContext(UserContext); // ✅ FIXED
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
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-red-600 cursor-pointer">
            <Link to="/about">About</Link>
          </li>

          <li className="hover:text-red-600 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>

          {user?.role === "hospital" && (
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/inventory">Inventory</Link>
            </li>
          )}

          {user?.role === "donor" && (
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/donordashboard">Donor Dashboard</Link>
            </li>
          )}

          {user && (
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/requests">Request Blood</Link>
            </li>
          )}

          {user?.role === "donor" && (
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/donor">Donate</Link>
            </li>
          )}

          {user?.role === "hospital" && (
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/hospital">Dashboard</Link>
            </li>
          )}

          {user?.role === "admin" && (
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/admin">Admin</Link>
            </li>
          )}
        </ul>

        {/* Buttons */}
        {!user ? (
          <div className="hidden md:flex space-x-4">
            <Link to="/login">
              <button className="px-5 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow">
                Register
              </button>
            </Link>
          </div>
        ) : (
          <button
            onClick={logout}
            className="px-5 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition"
          >
            Logout
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>

            {user?.role === "donor" && (
              <>
                <li><Link to="/donor">Donate</Link></li>
                <li><Link to="/donordashboard">Donor Dashboard</Link></li>
              </>
            )}

            {user?.role === "hospital" && (
              <>
                <li><Link to="/hospital">Dashboard</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
              </>
            )}

            {user?.role === "admin" && (
              <li><Link to="/admin">Admin</Link></li>
            )}

            {user && (
              <li><Link to="/requests">Request Blood</Link></li>
            )}
          </ul>

          {!user ? (
            <div className="mt-4 flex flex-col space-y-3">
              <Link to="/login">
                <button className="border border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-50">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
                  Register
                </button>
              </Link>
            </div>
          ) : (
            <button
              onClick={logout}
              className="mt-4 w-full border border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-50"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}