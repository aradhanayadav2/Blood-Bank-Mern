import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import DonorDashboard from "./pages/DonorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import InventoryDashboard from "./pages/Inventory";
import Hospitaldashboard from "./pages/Hospitaldashboard";
import Footer from "./components/Footer";
import Donor from "./pages/Donor";
import Requests from "./pages/Requests";
import DonorDashboard from "./pages/DonorDashboard";
import About from "./pages/About ";
import Contact from "./pages/Contact";
import UserContext from "./context/UserContext";


function App() {
  return (
    <BrowserRouter>
      <UserContext>
        <div className="flex flex-col min-h-screen">

          {/* Navbar */}
          <Navbar />

          {/* Pages */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/donordashboard" element={<DonorDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/hospital" element={<Hospitaldashboard />} />
              <Route path="/inventory" element={<InventoryDashboard />} />
              <Route path="/donor" element={<Donor />} />
              <Route path="/requests" element={<Requests />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </UserContext>
    </BrowserRouter>
  );
}

export default App;