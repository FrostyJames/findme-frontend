import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { register } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    student_id: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register(formData);

      localStorage.setItem(
        "token",
        response.data.token
      );

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block relative">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Students"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-blue-600/60 flex flex-col justify-center px-12 text-white">
          <h1 className="text-6xl font-bold">
            Join FindMe
          </h1>

          <p className="text-xl mt-6">
            Help build a smarter campus lost and found network.
          </p>

          <div className="mt-10 space-y-3">
            <div>✅ AI Matching</div>
            <div>✅ QR Ownership Tags</div>
            <div>✅ Real-Time Notifications</div>
            <div>✅ Recovery Analytics</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-slate-50 p-6">
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg">
          <h1 className="text-3xl font-bold mb-2">
            Create Account
          </h1>

          <p className="text-slate-500 mb-6">
            Get started with FindMe today.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border p-3 rounded-xl"
              onChange={handleChange}
            />

            <input
              type="text"
              name="student_id"
              placeholder="Student ID"
              className="w-full border p-3 rounded-xl"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border p-3 rounded-xl"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border p-3 rounded-xl"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password"
              className="w-full border p-3 rounded-xl"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-3 rounded-xl font-semibold"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-6 text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;