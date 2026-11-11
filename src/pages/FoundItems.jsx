import MainLayout from "../layouts/MainLayout";
import ItemCard from "../components/ItemCard";

function FoundItems() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">
        Found Items
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <ItemCard
          title="Black Backpack"
          category="Bag"
          location="Cafeteria"
          status="Found"
        />
      </div>
    </MainLayout>
  );
}

export default FoundItems;