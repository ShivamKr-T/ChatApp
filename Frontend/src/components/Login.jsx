import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
    const [authUser,setAuthUser]=useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios.post("/api/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Login successful");
          localStorage.setItem("ChatApp", JSON.stringify(response.data));
          setAuthUser(response.data);
        }
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full max-w-md bg-slate-700 p-8 rounded-xl shadow-lg space-y-6"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-1 text-teal-400">
            Tappy<span className='text-yellow-400'>Talk</span>
          </h1>
          <h2 className="text-2xl font-bold text-gray-300">Login</h2>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm text-gray-300">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:ring-2 ring-teal-500 outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format"
              }
            })}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm text-gray-300">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded bg-slate-600 text-white placeholder-gray-400 focus:ring-2 ring-teal-500 outline-none"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                message:
                  "Must be 8+ chars, include uppercase, lowercase, and number"
              }
            })}
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Login & Signup Text */}
        <div className="text-center space-y-3">
          <p className="text-sm text-gray-400">
            New user?{" "}
            <Link to="/signup" className="text-teal-400 hover:underline">
              Signup
            </Link>
          </p>
          <input
            type="submit"
            value="Login"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition duration-300 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
