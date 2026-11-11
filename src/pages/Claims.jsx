import MainLayout from "../layouts/MainLayout";
import {
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaUserShield,
} from "react-icons/fa";

function Claims() {
  const claims = [
    {
      id: 1,
      item: "HP EliteBook Laptop",
      status: "Pending",
      owner: "James Ivan",
      date: "Nov 10, 2026",
    },
    {
      id: 2,
      item: "Student ID Card",
      status: "Approved",
      owner: "Mary Wanjiku",
      date: "Nov 8, 2026",
    },
    {
      id: 3,
      item: "Blue Backpack",
      status: "Rejected",
      owner: "John Kamau",
      date: "Nov 7, 2026",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Approved":
        return (
          <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
            <FaCheckCircle />
            Approved
          </span>
        );

      case "Rejected":
        return (
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
            <FaTimesCircle />
            Rejected
          </span>
        );

      default:
        return (
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
            <FaClock />
            Pending
          </span>
        );
    }
  };

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-8 rounded-3xl shadow-xl">
          <h1 className="text-4xl font-bold">
            Ownership Claims
          </h1>

          <p className="text-orange-100 mt-3">
            Track and manage ownership verification requests.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow">
            <p className="text-slate-500">
              Pending Claims
            </p>

            <h2 className="text-4xl font-bold text-orange-500 mt-2">
              8
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <p className="text-slate-500">
              Approved Claims
            </p>

            <h2 className="text-4xl font-bold text-emerald-500 mt-2">
              24
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <p className="text-slate-500">
              Rejected Claims
            </p>

            <h2 className="text-4xl font-bold text-red-500 mt-2">
              5
            </h2>
          </div>

        </div>

        {/* Claims List */}
        <div className="space-y-4">

          {claims.map((claim) => (
            <div
              key={claim.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                <div>
                  <h2 className="text-2xl font-bold">
                    {claim.item}
                  </h2>

                  <div className="flex items-center gap-2 mt-2 text-slate-500">
                    <FaUserShield />
                    {claim.owner}
                  </div>

                  <p className="text-slate-500 mt-1">
                    Submitted: {claim.date}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {getStatusBadge(claim.status)}

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl">
                    View Claim
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </MainLayout>
  );
}

export default Claims;