import MainLayout from "../layouts/MainLayout";

function Analytics() {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-8">
        Recovery Analytics
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          Most Lost Area
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          Recovery Rate
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          Monthly Reports
        </div>
      </div>
    </MainLayout>
  );
}

export default Analytics;