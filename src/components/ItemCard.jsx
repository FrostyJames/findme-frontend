function ItemCard({
  title,
  category,
  location,
  status,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-lg transition">
      <h3 className="font-semibold text-xl">
        {title}
      </h3>

      <p className="text-slate-600 mt-2">
        {category}
      </p>

      <p className="text-slate-500">
        {location}
      </p>

      <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
        {status}
      </span>
    </div>
  );
}

export default ItemCard;