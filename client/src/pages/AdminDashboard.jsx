import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {

  const [users, setUsers] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [requests, setRequests] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/users")
      .then(res => setUsers(res.data));

    axios.get("http://localhost:5000/api/admin/hospitals")
      .then(res => setHospitals(res.data));

    axios.get("http://localhost:5000/api/admin/requests")
      .then(res => setRequests(res.data));

    axios.get("http://localhost:5000/api/admin/donations")
      .then(res => setDonations(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      {/* HEADER */}
      <h1 className="text-4xl font-bold text-red-600 mb-10">
        🛠️ Admin Dashboard
      </h1>

      {/* 🔥 STATS CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">
          <p className="opacity-80">Total Users</p>
          <h2 className="text-3xl font-bold">{users.length}</h2>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">
          <p className="opacity-80">Total Hospitals</p>
          <h2 className="text-3xl font-bold">{hospitals.length}</h2>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">
          <p className="opacity-80">Total Requests</p>
          <h2 className="text-3xl font-bold">{requests.length}</h2>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition">
          <p className="opacity-80">Total Donations</p>
          <h2 className="text-3xl font-bold">{donations.length}</h2>
        </div>

      </div>

      {/* USERS */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          👥 All Users
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map(u => (
                <tr key={u._id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{u.name}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${u.role === "admin"
                        ? "bg-purple-100 text-purple-700"
                        : u.role === "hospital"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                      {u.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* REQUESTS */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          🩸 All Requests
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-center" >
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3">Patient</th>
                <th className="p-3">Blood</th>
                <th className="p-3">Units</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {requests.map(r => (
                <tr key={r._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{r.patientName}</td>
                  <td className="p-3 font-semibold text-red-600">
                    {r.bloodGroup}
                  </td>
                  <td className="p-3">{r.units}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${r.status === "accepted"
                        ? "bg-green-100 text-green-700"
                        : r.status === "rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* DONATIONS */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          💉 All Donations
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full" style={{textAlign:"center"}}>
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3">Donor</th>
                <th className="p-3">Blood</th>
                <th className="p-3">Units</th>
                <th className="p-3">Hospital</th>
              </tr>
            </thead>

            <tbody>
              {donations.map(d => (
                <tr key={d._id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{d.donorName}</td>

                  <td className="p-3 text-red-600 font-semibold">
                    {d.bloodGroup}
                  </td>

                  <td className="p-3">{d.units}</td>

                  {/* ✅ NEW COLUMN */}
                  <td className="p-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {d.hospitalName || "N/A"}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}