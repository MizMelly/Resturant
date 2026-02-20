import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/home', label: 'Home' },
    { to: '/explore', label: 'Explore' },
    { to: '/cart', label: 'My Orders' },
    { to: '/account', label: 'Account' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm md:bg-white/95 md:backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/home"
          className="font-['Dancing_Script'] text-3xl sm:text-4xl md:text-5xl text-[#c47a2c] tracking-tight"
        >
          Chuks Kitchen
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-12 lg:space-x-20 xl:space-x-24 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-orange-600 font-semibold'
                    : 'hover:text-orange-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Login Button – desktop only, made longer */}
        <div className="hidden md:block">
          <Link
            to="/signin"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-1.5 rounded-lg font-medium transition shadow-md hover:shadow-lg whitespace-nowrap text-base"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu – solid white, no transparency */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col gap-8 text-xl font-medium text-gray-800 mt-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${
                  location.pathname === link.to ? 'text-orange-600 font-semibold' : 'hover:text-orange-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/signin"
            className="mt-12 bg-orange-500 hover:bg-orange-600 text-white px-10 py-3.5 rounded-lg font-semibold text-center transition shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>

      {/* Backdrop – only for mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}