import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <h1 className="text-[150px] font-extrabold text-white leading-none">
          404
        </h1>

        <h2 className="text-4xl font-bold text-white mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-blue-100 mt-6 text-lg">
          The page you're looking for doesn't exist,
          has been moved, or is temporarily unavailable.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/"
            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition"
          >
            <FaHome />
            Back Home
          </Link>

          <Link
            to="/dashboard"
            className="bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:bg-blue-400 transition"
          >
            <FaSearch />
            Dashboard
          </Link>

        </div>

        {/* Decorative Card */}

        <div className="mt-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 text-left">

          <h3 className="text-white text-xl font-semibold mb-3">
            Lost something?
          </h3>

          <p className="text-blue-100">
            Head back to FindMe and continue searching,
            reporting lost items, or checking matches.
          </p>

        </div>

      </div>

    </div>
  );
}

export default NotFound;