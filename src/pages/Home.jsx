import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium">
              Smart Lost & Found System
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
              Lost something
              <span className="text-blue-600"> on campus?</span>
            </h1>

            <p className="text-slate-600 text-lg mt-6 max-w-xl">
              FindMe helps students recover lost items faster
              through smart matching, ownership verification,
              QR tagging and analytics.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">

              <Link to="/report-lost">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                  Report Lost Item
                </button>
              </Link>

              <Link to="/report-found">
                <button className="bg-white border border-slate-300 px-6 py-3 rounded-xl hover:bg-slate-100 transition">
                  Report Found Item
                </button>
              </Link>

            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">

            <div className="space-y-5">

              <div className="p-4 rounded-xl bg-blue-50">
                <h3 className="font-bold">
                  Black HP Laptop
                </h3>

                <p className="text-green-600">
                  91% Match Found
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50">
                <h3 className="font-bold">
                  Student ID Card
                </h3>

                <p className="text-emerald-600">
                  Successfully Recovered
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50">
                <h3 className="font-bold">
                  Backpack
                </h3>

                <p className="text-amber-600">
                  Ownership Verification Pending
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-5xl font-bold text-blue-600">
              340
            </h2>

            <p className="mt-2 text-slate-500">
              Lost Reports
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-5xl font-bold text-emerald-500">
              241
            </h2>

            <p className="mt-2 text-slate-500">
              Recovered Items
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-5xl font-bold text-purple-600">
              92%
            </h2>

            <p className="mt-2 text-slate-500">
              Match Accuracy
            </p>
          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold">
              AI Matching
            </h3>

            <p className="text-slate-500 mt-2">
              Intelligent matching of lost and found items.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold">
              QR Ownership Tags
            </h3>

            <p className="text-slate-500 mt-2">
              Generate printable ownership tags.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold">
              Campus Maps
            </h3>

            <p className="text-slate-500 mt-2">
              Locate where items are lost and found.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold">
              Analytics
            </h3>

            <p className="text-slate-500 mt-2">
              Discover recovery trends and hotspots.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;