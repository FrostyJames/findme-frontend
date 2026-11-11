import MainLayout from "../layouts/MainLayout";
import MatchCard from "../components/MatchCard";

function Matches() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">
        Potential Matches
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <MatchCard
          item="Black HP Laptop"
          score={91}
        />
      </div>
    </MainLayout>
  );
}

export default Matches;