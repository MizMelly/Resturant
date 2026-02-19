import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    // FOOTER – hidden on mobile, visible on desktop
    <footer className="hidden md:block bg-[#3a1f0f] text-white py-10 md:py-12">
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
  );
}