import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-screen p-5">
      <h2 className="text-lg font-semibold mb-6">
        Menu
      </h2>

      <ul className="space-y-2">
        <li>
          <Link
            to="/dashboard"
            className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/report-lost"
            className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            Report Lost
          </Link>
        </li>

        <li>
          <Link
            to="/report-found"
            className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            Report Found
          </Link>
        </li>

        <li>
          <Link
            to="/matches"
            className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            Matches
          </Link>
        </li>

        <li>
          <Link
            to="/claims"
            className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            Claims
          </Link>
        </li>

        <li>
          <Link
            to="/analytics"
            className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            Analytics
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;