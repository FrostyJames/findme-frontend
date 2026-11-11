import MainLayout from "../layouts/MainLayout";

function ReportFound() {
  return (
    <MainLayout>
      <div className="bg-white p-8 rounded-2xl shadow-sm max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">
          Report Found Item
        </h1>

        <form className="space-y-4">
          <input
            className="w-full border p-3 rounded-xl"
            placeholder="Title"
          />

          <input
            className="w-full border p-3 rounded-xl"
            placeholder="Category"
          />

          <textarea
            className="w-full border p-3 rounded-xl"
            placeholder="Description"
          />

          <input
            className="w-full border p-3 rounded-xl"
            placeholder="Location Found"
          />

          <input
            type="date"
            className="w-full border p-3 rounded-xl"
          />

          <button className="bg-blue-600 text-white p-3 rounded-xl">
            Submit
          </button>
        </form>
      </div>
    </MainLayout>
  );
}

export default ReportFound;
