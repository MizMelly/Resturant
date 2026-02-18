import React, { useState } from 'react';
import Im1 from "../assets/Im1.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-hidden">

      <div className="flex-grow grid md:grid-cols-2">

        {/* LEFT IMAGE - strictly left side, no overflow */}
        <div className="hidden md:block relative overflow-hidden">
          <img
            src={Im1}
            alt="Nigerian family enjoying meal"
            className="w-full h-full object-cover opacity-70"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45"></div>

          {/* Write-up overlay on image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-10 z-10">
            <h1 className="font-['Dancing_Script'] text-6xl lg:text-7xl text-[#c47a2c] mb-6 drop-shadow-2xl">
              Chuks Kitchen
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl leading-relaxed drop-shadow-lg">
              Your journey to delicious, authentic Nigerian meals starts here.  
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Sign Up Form */}
        <div className="flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-12 bg-white/95 backdrop-blur-sm md:bg-white/100 md:backdrop-blur-none">

          {/* Form Title */}
          <div className="mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
              Create your Account
            </h3>
            <p className="text-center md:text-left text-gray-600 mt-2 text-lg">
              Join Chuks Kitchen today
            </p>
          </div>

          {/* Form */}
          <div className="max-w-lg mx-auto md:mx-0 w-full space-y-6">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-lg">
                Email
              </label>
              <input
                type="email"
                placeholder="name@gmail.com"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg shadow-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-lg">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="0812340690"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg shadow-sm"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2 text-lg">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-14 text-lg shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-[42px] text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2 text-lg">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-14 text-lg shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-5 top-[42px] text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
              </button>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 accent-orange-500"
              />
              <label htmlFor="terms" className="text-gray-600 text-base">
                I agree to the Terms & Conditions and Privacy Policy
              </label>
            </div>

            {/* Continue Button */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-xl font-medium text-xl transition shadow-md mt-6">
              Continue
            </button>

            {/* Or continue with */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-6 bg-white text-gray-600">Or continue with</span>
              </div>
            </div>

            {/* Google */}
            <button className="w-full border border-gray-300 text-gray-800 py-5 rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition text-lg shadow-sm">
              <FcGoogle size={28} />
              Continue with Google
            </button>

            {/* Apple */}
            <button className="w-full border border-gray-300 text-gray-800 py-5 rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition text-lg shadow-sm">
              <FaApple size={28} />
              Continue with Apple
            </button>

            {/* Sign In Link */}
            <p className="text-center text-gray-600 mt-8 text-lg">
              Already have an account?{" "}
              <a href="/signin" className="text-orange-600 hover:underline font-medium">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* DARK BROWN FOOTER */}
      <footer className="bg-[#3a1f0f] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          {/* Chuks Kitchen */}
          <div>
            <h3 className="font-['Dancing_Script'] text-4xl text-[#c47a2c] mb-4">
              Chuks Kitchen
            </h3>
            <p className="text-gray-300">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Explore</a></li>
              <li><a href="#" className="hover:underline">My Order</a></li>
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>+234 801 234 5678</li>
              <li>hello@chukskitchen.com</li>
              <li>123 Taste Blvd, Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-8 text-3xl">
              <a href="#" className="hover:text-[#c47a2c] transition">Facebook</a>
              <a href="#" className="hover:text-[#c47a2c] transition">Twitter</a>
              <a href="#" className="hover:text-[#c47a2c] transition">LinkedIn</a>
              <a href="#" className="hover:text-[#c47a2c] transition">Instagram</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-8">
          © 2024 Chuks Kitchen. All rights reserved.
        </div>
      </footer>
    </div>
  );
}