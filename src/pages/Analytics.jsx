import MainLayout from "../layouts/MainLayout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const locationData = [
  { name: "Library", reports: 45 },
  { name: "Cafeteria", reports: 30 },
  { name: "Hostel", reports: 20 },
  { name: "Science Block", reports: 15 },
];

const recoveryData = [
  { name: "Recovered", value: 241 },
  { name: "Pending", value: 99 },
];

const COLORS = ["#10B981", "#EF4444"];

function Analytics() {
  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Hero */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold">
            Recovery Analytics
          </h1>

          <p className="mt-3 text-purple-100">
            Monitor trends, recovery rates and campus hotspots.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-slate-500">
              Total Reports
            </p>

            <h2 className="text-4xl font-bold text-blue-600 mt-2">
              340
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-slate-500">
              Recovered
            </p>

            <h2 className="text-4xl font-bold text-emerald-500 mt-2">
              241
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-slate-500">
              Match Accuracy
            </p>

            <h2 className="text-4xl font-bold text-purple-600 mt-2">
              92%
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-slate-500">
              Active Claims
            </p>

            <h2 className="text-4xl font-bold text-orange-500 mt-2">
              18
            </h2>
          </div>

        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Bar Chart */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-bold mb-6">
              Most Lost Locations
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <BarChart data={locationData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="reports"
                  fill="#2563EB"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-bold mb-6">
              Recovery Status
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <PieChart>
                <Pie
                  data={recoveryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {recoveryData.map(
                    (entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    )
                  )}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default Analytics;