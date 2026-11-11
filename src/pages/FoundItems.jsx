import MainLayout from "../layouts/MainLayout";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

function FoundItems() {
  const items = [
    {
      id: 1,
      title: "Dell Laptop",
      category: "Electronics",
      location: "Library",
      date: "Nov 11, 2026",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
      id: 2,
      title: "Student ID Card",
      category: "Documents",
      location: "Administration Block",
      date: "Nov 10, 2026",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      id: 3,
      title: "Black Backpack",
      category: "Bags",
      location: "Cafeteria",
      date: "Nov 9, 2026",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-3xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold">
            Found Items
          </h1>

          <p className="mt-3 text-green-100">
            Browse items that have been found and reported on campus.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <div className="flex items-center gap-3">
            <FaSearch className="text-slate-500" />

            <input
              type="text"
              placeholder="Search found items..."
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <div className="flex items-center gap-2 mb-4">
                  <FaCheckCircle className="text-emerald-500" />

                  <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                    Found
                  </span>
                </div>

                <h2 className="text-2xl font-bold">
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

                <button className="mt-6 w-full bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-600 transition">
                  Claim Item
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </MainLayout>
  );
}

export default FoundItems;