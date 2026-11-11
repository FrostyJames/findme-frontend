import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { FaUpload, FaMapMarkerAlt } from "react-icons/fa";
import { createFoundItem } from "../services/foundItemService";

function ReportFound() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "Electronics",
    description: "",
    location_found: "",
    date_found: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createFoundItem(formData);

      alert("Found item submitted successfully!");

      navigate("/found-items");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to submit item"
      );
    }
  };

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-3xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold">
            Report Found Item
          </h1>

          <p className="mt-3 text-green-100">
            Help someone recover their belongings by reporting a found item.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold">
                  Item Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Black Backpack"
                  className="w-full border rounded-xl p-3"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
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
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the item..."
                className="w-full border rounded-xl p-3"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold">
                  Date Found
                </label>

                <input
                  type="date"
                  name="date_found"
                  value={formData.date_found}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Location Found
                </label>

                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-4 text-slate-400" />

                  <input
                    type="text"
                    name="location_found"
                    value={formData.location_found}
                    onChange={handleChange}
                    placeholder="Science Block"
                    className="w-full border rounded-xl p-3 pl-10"
                    required
                  />
                </div>
              </div>

            </div>

            {/* Upload Area */}
            <div>
              <label className="block mb-2 font-semibold">
                Upload Image
              </label>

              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center hover:border-emerald-500 transition">
                <FaUpload className="mx-auto text-4xl text-slate-400" />

                <p className="mt-4 text-slate-500">
                  Upload a photo of the found item
                </p>

                <input
                  type="file"
                  className="mt-4"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Submit Found Item
            </button>

          </form>
        </div>

      </div>
    </MainLayout>
  );
}

export default ReportFound;