import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const serverUrl = import.meta.env.VITE_SERVER_URL;

import signupbg from "../assets/login-bg.jpg";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form validation
  const validateForm = () => {
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      return "All fields are required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    return null; // No errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setError(error);
      return;
    }

    try {
      const response = await fetch(`${serverUrl}/api/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Store user data in session storage
        sessionStorage.setItem("user", JSON.stringify(data.user));
        // Navigate to /home
        navigate("/home");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${signupbg})` }}
    >{error && (
      <div className="fixed top-5 right-5 z-50 flex items-start p-4 space-x-4 text-white bg-red-600 rounded-lg shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <span className="text-sm">Network error! {error}</span>
        <button
          onClick={() => setError(null)}
          className="text-white rounded-full hover:bg-red-700 p-1"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    )}
      <div className="flex w-full items-center justify-center bg-black bg-opacity-50 px-6 py-12">
        <div className="flex flex-col lg:flex-row lg:gap-12 w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Side: Text Section */}
          <div className="flex flex-1 flex-col justify-center bg-indigo-700 p-8 text-white">
            <h1 className="text-4xl font-bold leading-tight font-[poppins]">
              SoulSupport
            </h1>
            <h1 className="text-4xl font-bold leading-tight">
              Join Us Today!
            </h1>
            <p className="mt-4 text-lg">
              Create an account to start exploring amazing features and be part
              of our community.
            </p>
          </div>

          {/* Right Side: Signup Form */}
          <div className="flex flex-1 flex-col justify-center px-8 py-12 lg:px-16">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img
                alt="Soul Support"
                src="https://images.vexels.com/media/users/3/235447/isolated/preview/bf1d3d610540bbc29a5af67c30ad69bc-brain-stroke-icon-top-view.png"
                className="mx-auto h-10 w-auto"
              />
              <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-gray-900">
                Create an account
              </h2>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              <p className="mt-6 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
