import MainLayout from "../layouts/MainLayout";
import ClaimCard from "../components/ClaimCard";

function Claims() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">
        My Claims
      </h1>

      <ClaimCard
        item="HP Laptop"
        status="Pending"
      />
    </MainLayout>
  );
}

export default Claims;