import MainLayout from "../layouts/MainLayout";
import ItemCard from "../components/ItemCard";

function LostItems() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">
        Lost Items
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <ItemCard
          title="HP Laptop"
          category="Electronics"
          location="Library"
          status="Lost"
        />
      </div>
    </MainLayout>
  );
}

export default LostItems;