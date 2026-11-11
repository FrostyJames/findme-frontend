import MainLayout from "../layouts/MainLayout";
import NotificationCard from "../components/NotificationCard";

function Notifications() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">
        Notifications
      </h1>

      <div className="space-y-4">
        <NotificationCard
          message="Match Found For HP Laptop"
          time="2 minutes ago"
        />
      </div>
    </MainLayout>
  );
}

export default Notifications;
