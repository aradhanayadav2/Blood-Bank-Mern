import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContextProvider } from "../context/UserContext";

export default function Hospitaldashboard() {

  const { user } = useContext(UserContextProvider);

  const [inventory, setInventory] = useState([]);
  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);

  // 🔥 Fetch Inventory
  useEffect(() => {
    if (!user?.name) return;

    axios
      .get(`${import.meta.env.VITE_API}/api/inventory/${user.name}`)
      .then((res) => setInventory(res.data))
      .catch((err) => console.log(err));
  }, [user]);

  // 🔥 Fetch Donations received
  useEffect(() => {
    if (!user?.name) return;

    axios
      .get(`${import.meta.env.VITE_API}/api/donations/hospital/${user.name}`)
      .then((res) => setDonations(res.data))
      .catch((err) => console.log(err));
  }, [user]);

  // 🔥 Fetch Requests (same city)
  useEffect(() => {
    if (!user?.city) return;

    axios.get(`${import.meta.env.VITE_API}/api/requests/${user.city}/${user.name}`).then((res) => setRequests(res.data)).catch((err) => console.log(err));
  }, [user]);

  // ✅ ACCEPT REQUEST
  const acceptRequest = async (request) => {
    // 🔍 Find matching blood group in inventory
    const blood = inventory.find(
      (item) => item.bloodGroup === request.bloodGroup
    );

    // ❌ If not available OR less units
    if (!blood || blood.units < request.units) {
      alert("❌ Not enough blood units available!");
      return;
    }

    // ✅ If available → proceed
    await axios.put(
      `${import.meta.env.VITE_API}/api/requests/accept/${request._id}`,
      { hospitalName: user.name }
    );

    alert("✅ Request Accepted");

    // update UI
    setRequests((prev) =>
      prev.map((r) =>
        r._id === request._id
          ? { ...r, status: "accepted", acceptedBy: user.name }
          : r
      )
    );

    // 🔥 OPTIONAL: reduce inventory in UI
    setInventory((prev) =>
      prev.map((item) =>
        item.bloodGroup === request.bloodGroup
          ? { ...item, units: item.units - request.units }
          : item
      )
    );
  };

  // ❌ REJECT REQUEST
  const rejectRequest = async (id) => {
    await axios.put(
      `${import.meta.env.VITE_API}/api/requests/reject/${id}`
    );

    alert("Request Rejected");

    setRequests((prev) =>
      prev.map((r) =>
        r._id === id ? { ...r, status: "rejected" } : r
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-black p-6">

      <h1 className="text-4xl font-bold text-white mb-10">
        🩸 Hospital Dashboard
      </h1>

      {/* 🔥 STATS CARDS */}
      {/* 🔥 STATS CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Total Blood Units */}
        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-xl shadow-xl">
          <p>Total Blood Units</p>
          <h2 className="text-3xl font-bold">
            {inventory.reduce((acc, item) => acc + item.units, 0)}
          </h2>
        </div>

        {/* 💉 Total Donations Received (UNITS) */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-xl">
          <p>Blood Received</p>
          <h2 className="text-3xl font-bold">
            {donations.reduce((acc, d) => acc + d.units, 0)}
          </h2>
        </div>

        {/* 🏥 Blood Given (Accepted Requests) */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-xl">
          <p>Blood Given</p>
          <h2 className="text-3xl font-bold">
            {requests
              .filter(r => r.status === "accepted")
              .reduce((acc, r) => acc + r.units, 0)}
          </h2>
        </div>

        {/* Pending Requests */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl shadow-xl">
          <p>Pending Requests</p>
          <h2 className="text-3xl font-bold">
            {requests.filter(r => r.status === "pending").length}
          </h2>
        </div>

      </div>

      {/* 🔥 INVENTORY */}
      <div className="bg-white p-6 rounded-xl mb-10">
        <h2 className="text-xl font-bold text-red-600 mb-4">Inventory</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {inventory.map((item, i) => (
            <div key={i} className="bg-red-100 p-4 rounded">
              <h3 className="font-bold">{item.bloodGroup}</h3>
              <p>{item.units} Units</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 DONATIONS RECEIVED */}
      <div className="bg-white p-6 rounded-xl mb-10">
        <h2 className="text-xl font-bold text-red-600 mb-4">
          Donations Received
        </h2>

        <table className="w-full">
          <thead className="bg-red-100">
            <tr>
              <th className="p-2">Donor</th>
              <th className="p-2">Blood</th>
              <th className="p-2">Units</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {donations.map((d, i) => (
              <tr key={i} className="border-b">
                <td className="p-2">{d.donorName}</td>
                <td className="p-2">{d.bloodGroup}</td>
                <td className="p-2">{d.units}</td>
                <td className="p-2">
                  {new Date(d.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 DONATIONS GIVEN (ACCEPTED REQUESTS) */}
      <div className="bg-white p-6 rounded-xl mb-10">
        <h2 className="text-xl font-bold text-red-600 mb-4">
          Donations Given (Accepted Requests)
        </h2>

        <table className="w-full">
          <thead className="bg-red-100">
            <tr>
              <th className="p-2">Patient</th>
              <th className="p-2">Blood</th>
              <th className="p-2">Units</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {requests.filter(r => r.status === "accepted").length > 0 ? (
              requests
                .filter(r => r.status === "accepted")
                .map((r) => (
                  <tr key={r._id} className="border-b">
                    <td className="p-2">{r.patientName}</td>
                    <td className="p-2">{r.bloodGroup}</td>
                    <td className="p-2">{r.units}</td>
                    <td className="p-2">{r.contact}</td>

                    <td className="p-2">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
                        Delivered
                      </span>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No Donations Given Yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 🔥 REQUESTS */}
      <div className="bg-white p-6 rounded-xl">
        <h2 className="text-xl font-bold text-red-600 mb-4">
          Blood Requests
        </h2>

        <table className="w-full">
          <thead className="bg-red-100">
            <tr>
              <th className="p-2">Patient</th>
              <th className="p-2">Blood</th>
              <th className="p-2">Units</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((r) => (
              <tr key={r._id} className="border-b">
                <td className="p-2">{r.patientName}</td>
                <td className="p-2">{r.bloodGroup}</td>
                <td className="p-2">{r.units}</td>

                <td className="p-2">{r.status}</td>

                <td className="p-2">
                  {r.status === "pending" && (
                    <>
                      <button
                        onClick={() => acceptRequest(r)}
                        className="bg-green-500 text-white px-3 py-1 mr-2 rounded"
                      >
                        Accept
                      </button>

                      <button
                        onClick={() => rejectRequest(r._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}