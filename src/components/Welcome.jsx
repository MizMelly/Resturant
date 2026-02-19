import React from 'react';
import { useNavigate } from "react-router-dom";
import Im1 from "../assets/Im1.png";      // Desktop/large screen image
import Im2 from "../assets/Im1-mobile.png";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f6f3ee] flex flex-col overflow-x-hidden">
      <div className="flex-grow grid md:grid-cols-2">

        {/* LEFT IMAGE – mobile: full width on top, desktop: full height on left */}
        <div className="w-full md:h-screen overflow-hidden order-1 md:order-none">
          <picture>
            {/* Mobile version: Im2 */}
            <source media="(max-width: 767px)" srcSet={Im2} />
            {/* Desktop version: Im1 */}
            <img
              src={Im1}
              alt="Nigerian family enjoying meal"
              className="w-full h-auto md:h-full object-cover"
            />
          </picture>
        </div>

        {/* RIGHT SIDE – full width on mobile, follows image */}
        <div className="flex flex-col px-5 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 bg-[#f6f3ee] order-2 md:order-none">

          {/* TOP HEADER */}
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className="font-['Dancing_Script'] text-3xl sm:text-4xl md:text-5xl text-[#c47a2c]">
              Chuks Kitchen
            </h2>

            <button
              onClick={() => navigate("/signin")}
              className="border-2 border-blue-500 text-blue-600 px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-50 transition active:scale-95 whitespace-nowrap"
            >
              Sign In
            </button>
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-grow flex flex-col justify-center">
            <div className="w-full max-w-4xl mx-auto space-y-8 md:space-y-10">

              {/* Headline */}
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight whitespace-nowrap">
                Your Authentic Taste of Nigeria
              </h1>

              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                Experience homemade flavors delivered fresh to your desk or home.  
                We bring the rich culinary heritage of Nigeria right to your doorstep.
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-4 md:pt-6">
                {/* First item */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full text-2xl sm:text-3xl shadow-sm">
                    🍴
                  </div>
                  <p className="text-gray-700 font-medium text-base sm:text-lg">Freshly Prepared</p>
                </div>

                {/* Second item */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full text-2xl sm:text-3xl shadow-sm">
                    🤝
                  </div>
                  <p className="text-gray-700 font-medium text-base sm:text-lg">Support Local Business</p>
                </div>

                {/* Third item */}
                <div className="flex items-center gap-3 sm:gap-4 md:col-span-2">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full text-2xl sm:text-3xl shadow-sm">
                    🚚
                  </div>
                  <p className="text-gray-700 font-medium text-base sm:text-lg">Fast & Reliable Delivery</p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8 md:pt-10">
                <button 
                  className="flex-1 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-4 sm:py-5 rounded-xl font-medium text-lg sm:text-xl transition shadow-sm hover:shadow-md active:scale-[0.98]"
                >
                  Start Your Order
                </button>

                <button 
                  className="flex-1 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 active:bg-blue-100 py-4 sm:py-5 rounded-xl font-medium text-lg sm:text-xl transition active:scale-[0.98]"
                >
                  Learn More About Us
                </button>
              </div>

              {/* Copyright – small, centered */}
              <hr className="my-4 md:my-5 border-t border-gray-300 w-full max-w-3xl mx-auto" />
              <p className="text-center text-gray-500 text-sm">
                © 2024 Chuks Kitchen. 
                <a href="/privacy" className="text-blue-500 hover:text-gray-700 mx-2">Privacy Policy</a>
                <a href="/terms" className="text-blue-500 hover:text-gray-700 mx-2">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER – completely hidden on mobile, only shows on desktop (md and up) */}
      <footer className="hidden md:block bg-[#3a1f0f] text-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Chuks Kitchen */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-['Dancing_Script'] text-3xl sm:text-4xl text-[#c47a2c] mb-3 md:mb-4">
              Chuks Kitchen
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
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