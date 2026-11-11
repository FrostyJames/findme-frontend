import MainLayout from "../layouts/MainLayout";
import { FaUpload, FaMapMarkerAlt } from "react-icons/fa";

function ReportLost() {
  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-3xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold">
            Report Lost Item
          </h1>

          <p className="mt-3 text-red-100">
            Tell us about your lost item and we'll help you find it.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl">

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold">
                  Item Title
                </label>

                <input
                  type="text"
                  placeholder="HP Laptop"
                  className="w-full border rounded-xl p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Category
                </label>

                <select className="w-full border rounded-xl p-3">
                  <option>Electronics</option>
                  <option>Documents</option>
                  <option>Bags</option>
                  <option>Clothes</option>
                  <option>Other</option>
                </select>
              </div>

            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Description
              </label>

              <textarea
                rows="5"
                placeholder="Describe the item..."
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold">
                  Date Lost
                </label>

                <input
                  type="date"
                  className="w-full border rounded-xl p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Location Lost
                </label>

                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-4 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Library"
                    className="w-full border rounded-xl p-3 pl-10"
                  />
                </div>
              </div>

            </div>

            {/* Upload Section */}

            <div>
              <label className="block mb-2 font-semibold">
                Upload Image
              </label>

              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center">
                <FaUpload className="mx-auto text-4xl text-slate-400" />

                <p className="mt-4 text-slate-500">
                  Upload an image of your item
                </p>

                <input
                  type="file"
                  className="mt-4"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Submit Report
            </button>

          </form>

        </div>

      </div>
    </MainLayout>
  );
}

export default ReportLost;