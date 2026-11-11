import MainLayout from "../layouts/MainLayout";

function Profile() {
  return (
    <MainLayout>
      <div className="bg-white p-8 rounded-2xl shadow-sm max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">
          Profile
        </h1>

        <div className="space-y-3">
          <p>Name: James Ivan</p>
          <p>Student ID: SEB12345</p>
          <p>Email: james@email.com</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;