import MainLayout from "../layouts/MainLayout";
import {
  FaEnvelope,
  FaIdCard,
  FaUserEdit,
  FaCheckCircle,
} from "react-icons/fa";

function Profile() {
  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Cover */}
        <div className="h-60 rounded-3xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Campus"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 -mt-24 relative">

          <div className="flex flex-col md:flex-row md:items-center gap-6">

            <img
              src="https://ui-avatars.com/api/?name=James+Ivan&background=2563EB&color=fff&size=200"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            />

            <div>
              <h1 className="text-4xl font-bold">
                James Ivan
              </h1>

              <p className="text-slate-500 mt-2">
                Software Engineering Student
              </p>

              <button className="mt-4 bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2">
                <FaUserEdit />
                Edit Profile
              </button>
            </div>

          </div>
        </div>

        {/* Information */}
        <div className="grid lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-5">
              Personal Information
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <span>james@email.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaIdCard className="text-blue-600" />
                <span>SEB12345</span>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-5">
              Recovery Statistics
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-slate-500">
                  Lost Reports
                </p>

                <h3 className="text-3xl font-bold">
                  12
                </h3>
              </div>

              <div>
                <p className="text-slate-500">
                  Found Reports
                </p>

                <h3 className="text-3xl font-bold">
                  8
                </h3>
              </div>

              <div>
                <p className="text-slate-500">
                  Successful Recoveries
                </p>

                <h3 className="text-3xl font-bold text-emerald-500 flex items-center gap-2">
                  6 <FaCheckCircle />
                </h3>
              </div>

            </div>
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default Profile;