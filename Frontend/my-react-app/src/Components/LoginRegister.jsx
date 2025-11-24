import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


 function LoginRegister() {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });


  const toggleMode = () => {
    setIsRegister((prev) => !prev);
    setForm({ name: "", email: "", password: "" }); // Clear form when switching
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

 const endpoint = isRegister
  ? "http://localhost:5000/api/auth/register"
  : "http://localhost:5000/api/auth/login";

    try {
      const res = await axios.post(endpoint, form);
      alert(res.data.message);

      if (!isRegister) {
        // Optional: Redirect or handle login success here
        console.log("Logged in successfully", res.data);
        navigate("/main");
      } else {
        // After successful registration, switch to login
        setIsRegister(false);
        setForm({ name: "", email: "", password: "" });
      }
    } catch (err) {
      console.error("Error:", err);
      alert(err.response?.data?.message || "Something went wrong.");
    }};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          {isRegister ? "Create an Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={toggleMode}
            className="text-blue-500 underline hover:text-blue-700"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default LoginRegister;
