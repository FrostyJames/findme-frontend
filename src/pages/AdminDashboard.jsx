import AdminLayout from "../layouts/AdminLayout";
import StatsCard from "../components/StatsCard";

function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <StatsCard title="Users" value="500" />
        <StatsCard title="Lost Reports" value="340" />
        <StatsCard title="Recovered" value="241" />
        <StatsCard title="Accuracy" value="92%" />
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;