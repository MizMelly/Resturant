import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";  
import Im1 from "../assets/Im1.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  

  const handleCreateAccount = () => {
    navigate("/signup");  
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { emailOrPhone, password });
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fffaf0]">
      <div className="flex-grow grid md:grid-cols-2 relative">

        {/* LEFT IMAGE */}
        <div className="hidden md:block relative overflow-hidden">
          <img
            src={Im1}
            alt="Nigerian family enjoying meal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-orange-500/50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8 z-10">
            <h1 className="font-['Dancing_Script'] text-4xl lg:text-5xl text-white mb-4 drop-shadow-lg">
              Chuks Kitchen
            </h1>
            <p className="text-base lg:text-lg leading-relaxed drop-shadow-md">
              Your journey to delicious, authentic<br />
              Nigerian meals starts here. Sign up<br />
              or log in to order your favorites<br />
              today!
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Login Form */}
        <div className="flex flex-col justify-center items-center px-5 sm:px-10 md:px-12 lg:px-24 py-10 sm:py-12 bg-[#fffaf0]">

          {/* Header – added more spacing below on mobile */}
          <div className="mb-10 md:mb-12 text-center md:text-left w-full max-w-md">
            <h2 className="font-['Dancing_Script'] text-4xl md:text-5xl text-[#c47a2c] mb-3 md:mb-4">
              Chuks Kitchen
            </h2>
            <p className="text-gray-700 text-lg md:text-xl font-medium">
              Login your Account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="max-w-md mx-auto w-full space-y-7">
            {/* Email / Phone */}
            <div>
              <label className="block text-gray-800 font-medium mb-2 text-base">
                Email or phone number
              </label>
              <input
                type="text"
                placeholder="name@gmail.com"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-base shadow-sm"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-gray-800 font-medium mb-2 text-base">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent pr-12 text-base shadow-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
              <a href="#" className="text-sm text-orange-600 hover:underline block text-right mt-1">
                Forgot Password?
              </a>
            </div>

            {/* Continue Button */}
            <button 
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium text-base shadow-md transition mt-2"
            >
              Continue
            </button>

            {/* Or continue with */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#fffaf0] text-gray-600">Or continue with</span>
              </div>
            </div>

            {/* Social login */}
            <button className="w-full border border-gray-300 text-gray-800 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition text-base shadow-sm">
              <FcGoogle size={24} />
              Continue with Google
            </button>

            <button className="w-full border border-gray-300 text-gray-800 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition text-base shadow-sm">
              <FaApple size={24} />
              Continue with Apple
            </button>

            {/* Create Account */}
            <p className="text-center text-gray-600 mt-6 text-base">
              Don't have an account?{" "}
              <button
                onClick={handleCreateAccount}
                className="text-orange-600 hover:underline font-medium bg-transparent border-none cursor-pointer"
              >
                Create an account
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#3a1f0f] text-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Chuks Kitchen */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-['Dancing_Script'] text-3xl sm:text-4xl text-[#c47a2c] mb-3 md:mb-4">
              Chuks Kitchen
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Bringing the authentic 
              flavors of Nigerian
               home cooking to your 
               table, with passion and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Explore</a></li>
              <li><a href="#" className="hover:underline">My Order</a></li>
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>+234 801 234 5678</li>
              <li>hello@chukskitchen.com</li>
              <li>123 Taste Blvd, Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex flex-col gap-3 text-sm sm:text-base">
              <a href="#" className="hover:text-[#c47a2c] transition">Facebook</a>
              <a href="#" className="hover:text-[#c47a2c] transition">Twitter</a>
              <a href="#" className="hover:text-[#c47a2c] transition">LinkedIn</a>
              <a href="#" className="hover:text-[#c47a2c] transition">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mt-10 md:mt-12">
          <p className="text-left text-gray-400 text-sm">
            © 2024 Chuks Kitchen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}