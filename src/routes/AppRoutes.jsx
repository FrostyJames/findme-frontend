import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ReportLost from "../pages/ReportLost";
import ReportFound from "../pages/ReportFound";
import LostItems from "../pages/LostItems";
import FoundItems from "../pages/FoundItems";
import Matches from "../pages/Matches";
import Claims from "../pages/Claims";
import Notifications from "../pages/Notifications";
import QRTags from "../pages/QRTags";
import Analytics from "../pages/Analytics";
import Profile from "../pages/Profile";
import AdminDashboard from "../pages/AdminDashboard";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/report-lost"
        element={
          <ProtectedRoute>
            <ReportLost />
          </ProtectedRoute>
        }
      />

      <Route
        path="/report-found"
        element={
          <ProtectedRoute>
            <ReportFound />
          </ProtectedRoute>
        }
      />

      <Route
        path="/lost-items"
        element={
          <ProtectedRoute>
            <LostItems />
          </ProtectedRoute>
        }
      />

      <Route
        path="/found-items"
        element={
          <ProtectedRoute>
            <FoundItems />
          </ProtectedRoute>
        }
      />

      <Route
        path="/matches"
        element={
          <ProtectedRoute>
            <Matches />
          </ProtectedRoute>
        }
      />

      <Route
        path="/claims"
        element={
          <ProtectedRoute>
            <Claims />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        }
      />

      <Route
        path="/qr-tags"
        element={
          <ProtectedRoute>
            <QRTags />
          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRoutes;