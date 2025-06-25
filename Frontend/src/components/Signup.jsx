import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function Signup() {
    const [authUser,setAuthUser]=useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit =async (data) => {
    const userInfo={
        fullname: data.fullname,
        email:data.email,
        password:data.password,
        confirmPassword:data.confirmPassword
    };
    // console.log(userInfo);
    await axios.post("/api/user/signup",userInfo,{
      withCredentials:true
    })
    .then((response)=>{
        // console.log(response.data);
        if(response.data){
            toast.success("Signup succesfull");
        }  
        localStorage.setItem("ChatApp",JSON.stringify(response.data));
        setAuthUser(response.data);
    })
    .catch((error)=>{
        if(error.response){
            toast.error("Error: "+error.response.data.error)
        }
    });
  };
  const password = watch("password");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      
      {/* Left Quote / Illustration Section */}
      <div
        className="hidden md:flex flex-col justify-center items-center w-1/2 bg-slate-700 text-center p-10 rounded-r-3xl shadow-lg"
        style={{ backgroundImage: "url('/assets/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <h1 className="text-4xl font-bold text-teal-400 mb-4">
          <span className="text-white">Welcome to</span> Tappy
          <span className="text-yellow-400">Talk</span> 💬
        </h1>
        <p className="text-gray-300 text-lg italic max-w-md">
          “Where every tap starts a story. Join the chatter, meet new friends, and talk your heart out.”
        </p>
        <div className="mt-8 text-sm text-gray-400">
          Fast. Fun. Friendly. TappyTalk.
        </div>
      </div>

      {/* Signup Form */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-full max-w-md bg-slate-800 p-8 rounded-xl shadow-xl space-y-6"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-1 text-teal-400">
              Tappy<span className="text-yellow-400">Talk</span>
            </h1>
            <h2 className="text-lg font-bold text-gray-300">Create your account</h2>
          </div>

          {/* Full Name */}
          <div>
            <label className="input-label">Full Name</label>
            <input
              className="w-full px-3 py-2 rounded bg-slate-600 text-white focus:ring-2 ring-teal-500 outline-none"
              placeholder="Full Name"
              {...register("fullname", {
                required: "Full Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters"
                },
                maxLength: {
                  value: 30,
                  message: "Maximum 30 characters"
                },
                pattern: {
                  value: /^[A-Za-z][A-Za-z0-9\-]*$/,
                  message: "Only letters, numbers or dash allowed"
                }
              })}
            />
            {errors.fullname && <p className="text-red-400 text-sm">{errors.fullname.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="input-label">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded bg-slate-600 text-white focus:ring-2 ring-teal-500 outline-none"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format"
                }
              })}
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="input-label">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded bg-slate-600 text-white focus:ring-2 ring-teal-500 outline-none"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                  message:
                    "Must be 8+ chars, include uppercase, lowercase, and a number"
                }
              })}
            />
            {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="input-label">Confirm Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded bg-slate-600 text-white focus:ring-2 ring-teal-500 outline-none"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match"
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-teal-400 hover:underline">
                Login
              </Link>
            </p>
            <input
              type="submit"
              value="Sign Up"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition duration-300 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
