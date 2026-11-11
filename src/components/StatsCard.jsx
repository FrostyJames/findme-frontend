function StatsCard({
  title,
  value,
  color = "text-blue-600",
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
      <h2
        className={`text-4xl font-bold ${color}`}
      >
        {value}
      </h2>

      <p className="text-slate-500 mt-2">
        {title}
      </p>
    </div>
  );
}

export default StatsCard;