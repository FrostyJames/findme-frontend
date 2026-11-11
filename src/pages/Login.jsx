import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({
        email,
        password,
      });

      localStorage.setItem(
        "token",
        response.data.token
      );

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side Image */}
      <div className="hidden lg:block relative">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="Campus"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60 flex flex-col justify-center px-12 text-white">
          <h1 className="text-6xl font-bold leading-tight">
            FindMe
          </h1>

          <p className="text-xl mt-6 max-w-lg">
            Recover lost belongings faster through
            smart matching, QR ownership tags and
            real-time campus reporting.
          </p>

          <div className="flex gap-4 mt-10">
            <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl">
              🔍 AI Matching
            </div>

            <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl">
              📍 Campus Tracking
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex justify-center items-center bg-slate-50 p-6">

        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <div className="text-center mb-8">

              <div className="text-4xl font-bold text-blue-600">
                FindMe
              </div>

              <h2 className="text-3xl font-bold mt-4">
                Welcome Back
              </h2>

              <p className="text-slate-500 mt-2">
                Sign in to continue
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </form>

            <p className="text-center text-slate-600 mt-6">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-semibold"
              >
                Register
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;