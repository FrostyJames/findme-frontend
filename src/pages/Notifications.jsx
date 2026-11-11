import MainLayout from "../layouts/MainLayout";
import {
  FaBell,
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
} from "react-icons/fa";

function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "success",
      message: "Possible match found for your HP Laptop.",
      time: "2 minutes ago",
    },
    {
      id: 2,
      type: "info",
      message: "Your lost item report was submitted successfully.",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "warning",
      message: "Ownership verification is required.",
      time: "Yesterday",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return (
          <FaCheckCircle className="text-emerald-500 text-xl" />
        );

      case "warning":
        return (
          <FaExclamationCircle className="text-orange-500 text-xl" />
        );

      default:
        return (
          <FaInfoCircle className="text-blue-500 text-xl" />
        );
    }
  };

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-4">
            <FaBell className="text-4xl" />

            <div>
              <h1 className="text-4xl font-bold">
                Notifications
              </h1>

              <p className="text-blue-100 mt-2">
                Stay updated on matches, claims and recoveries.
              </p>
            </div>
          </div>
        </div>

        {/* Notification List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between">

                <div className="flex gap-4">
                  {getIcon(notification.type)}

                  <div>
                    <p className="font-medium">
                      {notification.message}
                    </p>

                    <p className="text-slate-500 text-sm mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>

                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  View
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </MainLayout>
  );
}

export default Notifications;