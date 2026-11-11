import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-slate-200 px-8 h-16 flex items-center justify-between sticky top-0 z-50">
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600"
      >
        FindMe
      </Link>

      <div className="flex items-center gap-6 text-slate-700">
        <Link
          to="/"
          className="hover:text-blue-600 transition"
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className="hover:text-blue-600 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/lost-items"
          className="hover:text-blue-600 transition"
        >
          Lost Items
        </Link>

        <Link
          to="/found-items"
          className="hover:text-blue-600 transition"
        >
          Found Items
        </Link>

        <Link
          to="/profile"
          className="hover:text-blue-600 transition"
        >
          Profile
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;