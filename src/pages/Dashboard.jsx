import MainLayout from "../layouts/MainLayout";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <StatsCard title="Lost Items" value="45" />
        <StatsCard title="Found Items" value="30" />
        <StatsCard title="Recovered" value="24" />
      </div>
    </MainLayout>
  );
}

export default Dashboard;