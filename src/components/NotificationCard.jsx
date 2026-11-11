function NotificationCard({
  message,
  time,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-600">
      <p>{message}</p>

      <small className="text-slate-500">
        {time}
      </small>
    </div>
  );
}

export default NotificationCard;