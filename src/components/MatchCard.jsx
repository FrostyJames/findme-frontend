function MatchCard({
  item,
  score,
}) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold">
        {item}
      </h3>

      <p className="text-4xl font-bold my-3">
        {score}%
      </p>

      <p className="text-yellow-300 text-xl">
        ★★★★★
      </p>

      <p className="mt-2">
        Potential Match Detected
      </p>
    </div>
  );
}

export default MatchCard;