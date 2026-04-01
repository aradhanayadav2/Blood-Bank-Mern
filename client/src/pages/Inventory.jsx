import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContextProvider } from "../context/UserContext";

export default function InventoryDashboard() {

  const { user } = useContext(UserContextProvider);
  const [inventory, setInventory] = useState([]);

  // 🔥 Fetch inventory
  useEffect(() => {
    if (!user?.name) return;

    axios
      .get(`${import.meta.env.VITE_API}/api/inventory/${user.name}`)
      .then((res) => setInventory(res.data))
      .catch((err) => console.log(err));
  }, [user]);

  // 🔥 STATUS BASED CALCULATION (NEW LOGIC)
  const totalHealthy = inventory
    .filter(i => i.status === "healthy")
    .reduce((acc, i) => acc + i.units, 0);

  const totalNearExpiry = inventory
    .filter(i => i.status === "nearExpiry")
    .reduce((acc, i) => acc + i.units, 0);

  const totalExpired = inventory
    .filter(i => i.status === "expired")
    .reduce((acc, i) => acc + i.units, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-black p-6">

      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-10">
        🩸 Blood Inventory Dashboard
      </h1>

      {/* 🔥 Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-xl hover:scale-105 transition">
          <p className="text-sm opacity-80">Healthy Blood Units</p>
          <h2 className="text-3xl font-bold mt-2">{totalHealthy}</h2>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-xl shadow-xl hover:scale-105 transition">
          <p className="text-sm opacity-80">Near Expiry</p>
          <h2 className="text-3xl font-bold mt-2">{totalNearExpiry}</h2>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-xl shadow-xl hover:scale-105 transition">
          <p className="text-sm opacity-80">Expired Blood</p>
          <h2 className="text-3xl font-bold mt-2">{totalExpired}</h2>
        </div>

      </div>

      {/* 🔥 Inventory Table */}
      <div className="bg-white rounded-xl p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-red-600 mb-6">
          Blood Inventory Details
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-red-50">
              <tr>
                <th className="p-3">Blood Group</th>
                <th className="p-3">Units</th>
                <th className="p-3">Status</th>
                <th className="p-3">Collection Date</th>
                <th className="p-3">Expiry Date</th>
                <th className="p-3">Storage</th>
              </tr>
            </thead>

            <tbody>

              {inventory.length > 0 ? (
                inventory.map((item, index) => (

                  <tr key={index} className="border-b hover:bg-yellow-50">

                    <td className="p-3 font-bold text-red-600">
                      {item.bloodGroup}
                    </td>

                    <td className="p-3">{item.units}</td>

                    {/* 🔥 STATUS BADGE */}
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded text-sm ${
                        item.status === "healthy"
                          ? "bg-green-100 text-green-700"
                          : item.status === "nearExpiry"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {item.status}
                      </span>
                    </td>

                    <td className="p-3">
                      {item.collection
                        ? new Date(item.collection).toLocaleDateString()
                        : "-"}
                    </td>

                    <td className="p-3">
                      {item.expiry
                        ? new Date(item.expiry).toLocaleDateString()
                        : "-"}
                    </td>

                    <td className="p-3">{item.location || "-"}</td>

                  </tr>

                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    No Inventory Data Available
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}