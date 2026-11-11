import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50">
      <h1 className="text-7xl font-bold text-blue-600">
        404
      </h1>

      <p className="text-slate-600 mt-4">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Back Home
      </Link>
    </div>
  );
}

export default NotFound;