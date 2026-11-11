import MainLayout from "../layouts/MainLayout";
import {
  FaSearch,
  FaCheckCircle,
  FaBoxOpen,
  FaBell,
} from "react-icons/fa";

function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-blue-100">
            Track lost items, monitor matches, and recover belongings faster.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <FaSearch className="text-blue-600 text-3xl mb-3" />
            <h2 className="text-4xl font-bold">45</h2>
            <p className="text-slate-500">Lost Items</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <FaBoxOpen className="text-orange-500 text-3xl mb-3" />
            <h2 className="text-4xl font-bold">30</h2>
            <p className="text-slate-500">Found Items</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <FaCheckCircle className="text-emerald-500 text-3xl mb-3" />
            <h2 className="text-4xl font-bold">24</h2>
            <p className="text-slate-500">Recovered</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <FaBell className="text-purple-500 text-3xl mb-3" />
            <h2 className="text-4xl font-bold">12</h2>
            <p className="text-slate-500">Notifications</p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">
              Report an Item
            </h2>

            <p className="text-slate-500 mb-4">
              Submit lost or found items quickly.
            </p>

            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
                Report Lost
              </button>

              <button className="bg-emerald-500 text-white px-5 py-3 rounded-xl">
                Report Found
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl shadow-md p-6 text-white">
            <h2 className="text-2xl font-bold">
              Recovery Rate
            </h2>

            <h1 className="text-6xl font-bold mt-4">
              92%
            </h1>

            <p className="mt-3">
              Match accuracy across all reports.
            </p>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span>Black HP Laptop reported lost</span>
              <span className="text-slate-500">
                2 hrs ago
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Potential match detected</span>
              <span className="text-slate-500">
                5 hrs ago
              </span>
            </div>

            <div className="flex justify-between">
              <span>Student ID recovered</span>
              <span className="text-slate-500">
                Yesterday
              </span>
            </div>

          </div>
        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;