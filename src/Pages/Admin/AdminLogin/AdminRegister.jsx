import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AdminRegister= () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://localhost:5000/login", { // Your backend login URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Navigate to the dashboard upon successful login
        console.log("Login successful:", data);
        navigate("/me/admin-panel-dashboard"); // Redirect to dashboard
      } else {
        // Display error message on failed login
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="bg-green-100 mt-64 md:mt-0">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="flex items-center mb-6 text-2xl font-extrabold text-gray-600">
          Asher's Portfolio - Login
        </h1>
        <div className="w-full bg-green-200 rounded-xl shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-600 md:text-2xl">
              Sign in to your account
            </h1>
            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-green-100 text-black rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  value={email} // Controlled input
                  onChange={(e) => setEmail(e.target.value)} // Update state
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-green-100 text-black rounded-lg block w-full p-2.5"
                  value={password} // Controlled input
                  onChange={(e) => setPassword(e.target.value)} // Update state
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-700 duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminRegister;
