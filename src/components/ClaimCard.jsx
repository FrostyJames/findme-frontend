function ClaimCard({
  item,
  status,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <h3 className="font-semibold">
        {item}
      </h3>

      <span className="inline-block mt-3 px-3 py-1 rounded-full bg-amber-100 text-amber-700">
        {status}
      </span>
    </div>
  );
}

export default ClaimCard;