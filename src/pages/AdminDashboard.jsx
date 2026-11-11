import AdminLayout from "../layouts/AdminLayout";
import {
  FaUsers,
  FaSearch,
  FaCheckCircle,
  FaChartLine,
  FaBell,
} from "react-icons/fa";

function AdminDashboard() {
  const recentClaims = [
    {
      id: 1,
      item: "HP Laptop",
      claimant: "James Ivan",
      status: "Pending",
    },
    {
      id: 2,
      item: "Student ID",
      claimant: "Mary Wanjiku",
      status: "Approved",
    },
    {
      id: 3,
      item: "Backpack",
      claimant: "John Kamau",
      status: "Rejected",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Admin"
            className="w-full h-72 object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-700/60 flex items-center">
            <div className="p-10 text-white">
              <h1 className="text-5xl font-bold">
                Admin Dashboard
              </h1>

              <p className="text-xl mt-3">
                Monitor campus recovery activities and system performance.
              </p>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <FaUsers className="text-3xl text-blue-600 mb-3" />
            <h2 className="text-4xl font-bold">512</h2>
            <p className="text-slate-500">Users</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <FaSearch className="text-3xl text-red-500 mb-3" />
            <h2 className="text-4xl font-bold">340</h2>
            <p className="text-slate-500">Lost Reports</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <FaCheckCircle className="text-3xl text-emerald-500 mb-3" />
            <h2 className="text-4xl font-bold">241</h2>
            <p className="text-slate-500">Recovered</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <FaChartLine className="text-3xl text-purple-500 mb-3" />
            <h2 className="text-4xl font-bold">92%</h2>
            <p className="text-slate-500">Accuracy</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <FaBell className="text-3xl text-orange-500 mb-3" />
            <h2 className="text-4xl font-bold">18</h2>
            <p className="text-slate-500">Active Claims</p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-blue-600 text-white rounded-2xl p-6">
            <h2 className="text-2xl font-bold">
              Manage Users
            </h2>

            <p className="mt-2 text-blue-100">
              View and manage registered users.
            </p>

            <button className="mt-5 bg-white text-blue-600 px-4 py-2 rounded-lg">
              View Users
            </button>
          </div>

          <div className="bg-emerald-500 text-white rounded-2xl p-6">
            <h2 className="text-2xl font-bold">
              Manage Reports
            </h2>

            <p className="mt-2 text-emerald-100">
              Review lost and found submissions.
            </p>

            <button className="mt-5 bg-white text-emerald-600 px-4 py-2 rounded-lg">
              View Reports
            </button>
          </div>

          <div className="bg-purple-600 text-white rounded-2xl p-6">
            <h2 className="text-2xl font-bold">
              Review Claims
            </h2>

            <p className="mt-2 text-purple-100">
              Verify ownership requests.
            </p>

            <button className="mt-5 bg-white text-purple-600 px-4 py-2 rounded-lg">
              View Claims
            </button>
          </div>

        </div>

        {/* Recent Claims Table */}
        <div className="bg-white rounded-3xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Recent Claims
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">
                    Item
                  </th>

                  <th className="text-left py-3">
                    Claimant
                  </th>

                  <th className="text-left py-3">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentClaims.map((claim) => (
                  <tr
                    key={claim.id}
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="py-4">
                      {claim.item}
                    </td>

                    <td className="py-4">
                      {claim.claimant}
                    </td>

                    <td className="py-4">
                      <span className="px-3 py-1 rounded-full bg-slate-100">
                        {claim.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </div>

      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;