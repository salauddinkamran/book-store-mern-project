import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import getBaseUrl from "../utils/baseURL";
import { useNavigate } from "react-router";
const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onsubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${getBaseUrl()}/api/auth/admin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const auth = response.data;
      console.log(auth);
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Token has been expired! please login again.");
          navigate("/");
        }, 3600 * 1000);
      }
      alert("Admin Login successful!");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Plese provide a valid email and password");
      console.log(error);
    }
  };
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-lg font-semibold mb-4">Admin dashboard Login</h2>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                UserName
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                {...register("username", { required: true })}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                {...register("password", { required: true })}
              />
            </div>
            {message && (
              <p className="text-red-500 text-sm italic mb-3">{message}</p>
            )}
            <div>
              <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none duration-200">
                Login
              </button>
            </div>
          </form>
          <p className="mt-5 text-center text-gray-500 text-xs">
            ©2025 Book Store. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
