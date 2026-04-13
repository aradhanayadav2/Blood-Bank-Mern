import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export default function DonorDashboard() {
  const { user } = useContext(UserContext);

  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);

  const API = import.meta.env.VITE_API;

  // 🔥 Fetch donations
  useEffect(() => {
    const fetchDonations = async () => {
      if (!user?.name) return;

      try {
        const res = await axios.get(
          `${API}/api/donations/${user.name}`
        );
        setDonations(res.data || []);
      } catch (err) {
        console.error("Error fetching donations:", err);
      }
    };

    fetchDonations();
  }, [user?.name]);

  // 🔥 Fetch requests
  useEffect(() => {
    const fetchRequests = async () => {
      if (!user?.name) return;

      try {
        const res = await axios.get(
          `${API}/api/requests/user/${user.name}`
        );
        setRequests(res.data || []);
      } catch (err) {
        console.error("Error fetching requests:", err);
      }
    };

    fetchRequests();
  }, [user?.name]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-black p-6">

      <h1 className="text-4xl font-bold text-white mb-10">
        🩸 Donor Dashboard
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-red-600 text-white p-6 rounded-xl">
          <p>Total Donations</p>
          <h2 className="text-3xl font-bold">{donations.length}</h2>
        </div>

        <div className="bg-red-600 text-white p-6 rounded-xl">
          <p>Total Requests</p>
          <h2 className="text-3xl font-bold">{requests.length}</h2>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-xl">
          <p>Accepted Requests</p>
          <h2 className="text-3xl font-bold">
            {requests.filter(r => r.status === "accepted").length}
          </h2>
        </div>

        <div className="bg-red-600 text-white p-6 rounded-xl">
          <p>Blood Group</p>
          <h2 className="text-3xl font-bold">
            {user?.bloodGroup || "N/A"}
          </h2>
        </div>

      </div>

      {/* REQUESTS TABLE */}
      <div className="bg-white rounded-xl p-6 shadow mb-10">

        <h2 className="text-2xl font-bold text-red-600 mb-6">
          My Blood Requests
        </h2>

        <table className="w-full">
          <thead className="bg-red-100">
            <tr>
              <th className="p-3">Patient</th>
              <th className="p-3">Blood</th>
              <th className="p-3">Units</th>
              <th className="p-3">Status</th>
              <th className="p-3">Accepted By</th>
            </tr>
          </thead>

          <tbody>
            {requests.length > 0 ? (
              requests.map((r) => (
                <tr key={r._id || r.id} className="border-b">
                  <td className="p-3">{r.patientName}</td>
                  <td className="p-3">{r.bloodGroup}</td>
                  <td className="p-3">{r.units}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded ${
                        r.status === "accepted"
                          ? "bg-green-200 text-green-700"
                          : "bg-yellow-200 text-yellow-700"
                      }`}
                    >
                      {r.status || "pending"}
                    </span>
                  </td>

                  <td className="p-3">
                    {r.acceptedBy || "Not yet"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No Requests Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* DONATION HISTORY */}
      <div className="bg-white rounded-xl p-6 shadow">

        <h2 className="text-2xl font-bold text-red-600 mb-6">
          Donation History
        </h2>

        <table className="w-full">

          <thead className="bg-red-100">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Blood</th>
              <th className="p-3">Units</th>
              <th className="p-3">Hospital</th>
            </tr>
          </thead>

          <tbody>
            {donations.length > 0 ? (
              donations.map((d) => (
                <tr key={d._id || d.id} className="border-b">
                  <td className="p-3">
                    {d.date
                      ? new Date(d.date).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="p-3">{d.bloodGroup}</td>
                  <td className="p-3">{d.units}</td>
                  <td className="p-3">{d.hospitalName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No Donations Yet
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}