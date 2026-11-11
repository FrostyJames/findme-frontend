import MainLayout from "../layouts/MainLayout";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function LostItems() {
  const items = [
    {
      id: 1,
      title: "HP EliteBook Laptop",
      category: "Electronics",
      location: "Main Library",
      date: "Nov 10, 2026",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
      id: 2,
      title: "Student ID Card",
      category: "Documents",
      location: "Science Block",
      date: "Nov 9, 2026",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      id: 3,
      title: "Blue Backpack",
      category: "Bags",
      location: "Cafeteria",
      date: "Nov 8, 2026",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Hero */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-3xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold">
            Lost Items
          </h1>

          <p className="mt-3 text-red-100">
            Browse all reported lost belongings across campus.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <div className="flex items-center gap-3">
            <FaSearch className="text-slate-500" />

            <input
              type="text"
              placeholder="Search lost items..."
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                  Lost
                </span>

                <h2 className="text-2xl font-bold mt-4">
                  {item.title}
                </h2>

                <p className="text-slate-500 mt-2">
                  {item.category}
                </p>

                <div className="flex items-center gap-2 mt-4 text-slate-600">
                  <FaMapMarkerAlt />
                  {item.location}
                </div>

                <div className="flex items-center gap-2 mt-2 text-slate-600">
                  <FaCalendarAlt />
                  {item.date}
                </div>

                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </MainLayout>
  );
}

export default LostItems;