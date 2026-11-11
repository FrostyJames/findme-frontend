import MainLayout from "../layouts/MainLayout";
import {
  FaCheckCircle,
  FaLaptop,
  FaIdCard,
  FaBriefcase,
} from "react-icons/fa";

function Matches() {
  const matches = [
    {
      id: 1,
      item: "Black HP Laptop",
      score: 91,
      location: "Library",
      icon: <FaLaptop />,
    },
    {
      id: 2,
      item: "Student ID Card",
      score: 87,
      location: "Science Block",
      icon: <FaIdCard />,
    },
    {
      id: 3,
      item: "Blue Backpack",
      score: 82,
      location: "Cafeteria",
      icon: <FaBriefcase />,
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-3xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold">
            AI Match Detection
          </h1>

          <p className="mt-3 text-indigo-100">
            Smart matching between lost and found items using intelligent analysis.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-slate-500">
              Total Matches
            </h3>

            <h2 className="text-4xl font-bold mt-3 text-blue-600">
              36
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-slate-500">
              Verified Matches
            </h3>

            <h2 className="text-4xl font-bold mt-3 text-emerald-500">
              28
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-slate-500">
              AI Accuracy
            </h3>

            <h2 className="text-4xl font-bold mt-3 text-purple-600">
              92%
            </h2>
          </div>

        </div>

        {/* Match Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start">

                <div>
                  <div className="text-5xl text-blue-600 mb-4">
                    {match.icon}
                  </div>

                  <h2 className="text-2xl font-bold">
                    {match.item}
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Found at {match.location}
                  </p>
                </div>

                <div className="text-right">
                  <h2 className="text-5xl font-bold text-emerald-500">
                    {match.score}%
                  </h2>

                  <p className="text-slate-500">
                    Match Score
                  </p>
                </div>

              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600"
                    style={{
                      width: `${match.score}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Status */}
              <div className="mt-6 flex justify-between items-center">

                <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                  <FaCheckCircle />
                  Potential Match Found
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition">
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

export default Matches;