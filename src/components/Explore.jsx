import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// images
import heroImg from "../assets/explore-hero.png";     
import dish1 from "../assets/popular1.png";
import dish2 from "../assets/explore 2.png";
import dish3 from "../assets/explore3.png";
import dish4 from "../assets/explore4.png";
import dish5 from "../assets/explore5.png";
import dish6 from "../assets/explore6.png";     
import dish7 from "../assets/explore7.png";
import dish8 from "../assets/explore8.png";

export default function Explore() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = [
    "Popular",
    "Jollof Rice & Entrees",
    "Swallow & Soups",
    "Grills & Sides",
    "Beverages",
    "Desserts",
  ];

  const popularDishes = [
    {
      name: "Jollof Rice & Fried Chicken",
      price: 3500,
      description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      image: dish1,
    },
    {
      name: "Eba & Egusi Soup (Goat Meat)",
      price: 3500,
      description: "Hearty Egusi soup with tender goat meat, served with soft Eba.",
      image: dish2,
    },
    {
      name: "Pounded Yam & Edikikong",
      price: 3800,
      description: "Traditional pounded yam with rich, leafy Edikikong soup.",
      image: dish3,
    },
    {
      name: "Peppered Snail",
      price: 2500,
      description: "Spicy and savory peppered snail, perfect as a starter.",
      image: dish4,
    },
    {
      name: "Grilled Tilapia Fish",
      price: 4500,
      description: "Whole grilled tilapia seasoned with our special spices.",
      image: dish5,
    },
    {
      name: "Asun (Spicy Goat Meat)",
      price: 3200,
      description: "Spicy roasted goat meat, a Nigerian delicacy with bold flavors.",
      image: dish6,
    },
  ];

  const jollofDishes = [
    {
      name: "Jollof Rice & Smoked Fish",
      price: 3500,
      description: "Flavorful jollof rice served with perfectly smoked fish.",
      image: dish7,
    },
    {
      name: "Party Jollof Rice (Veg)",
      price: 3500,
      description: "Vegetarian party jollof, full of rich flavors.",
      image: dish2,
    },
    {
      name: "Jollof Rice & Fried Chicken",
      price: 3500,
      description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      image: dish1,
    },
  ];

  const swallowDishes = [
    {
      name: "Fufu & Okra Soup (Fish)",
      price: 3500,
      description: "Light Fufu served with fresh okra soup and tilapia fish.",
      image: dish8,
    },
    {
      name: "Fufu & Okra Soup (Fish)",
      price: 3500,
      description: "Light Fufu served with fresh okra soup and tilapia fish.",
      image: dish8,
    },
    {
      name: "Amala & Ewedu Soup",
      price: 3500,
      description: "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
      image: dish3,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden flex flex-col">

      {/* HERO SECTION – no gap, text higher up */}
      <section className="relative min-h-screen flex items-start justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Food spread"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/40 to-black/70" />
        </div>

        {/* Hero content – pushed higher (reduced pt) */}
        <div className="relative z-10 pt-20 md:pt-28 px-6 sm:px-10 md:px-16 lg:px-24 text-white text-left max-w-5xl mx-0 ml-0 lg:ml-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 drop-shadow-2xl">
            Chuks Kitchen
          </h1>
          <p className="text-xl md:text-3xl drop-shadow-lg">
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </p>
        </div>
      </section>

      {/* MENU CATEGORIES + DISH SECTIONS */}
      <section className="py-12 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          {/* Menu Categories – more compact */}
          <div className="mb-12">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl shadow-md overflow-hidden">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="w-full text-left px-8 py-6 text-2xl md:text-3xl font-bold text-orange-700 hover:bg-orange-100 transition flex items-center justify-between"
              >
                Menu Categories
              </button>

              <ul className={`space-y-4 text-lg px-8 pb-8 transition-all duration-300 ${isCategoriesOpen ? 'block' : 'hidden'}`}>
                {categories.map((cat, index) => (
                  <li key={index}>
                    <button
                      className={`w-full text-left px-6 py-4 rounded-xl transition font-medium text-base md:text-lg shadow-sm ${
                        cat === "Popular" ? "bg-orange-500 text-white shadow-md" : "text-gray-800 hover:bg-orange-100 hover:shadow"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Popular – larger cards, better spacing */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
              Popular
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {popularDishes.map((dish, index) => (
                <Link
                  key={index}
                  to={`/food/${index}`} // ← links to Food Details page
                  className="block hover:scale-[1.03] transition-transform duration-300"
                >
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <img src={dish.image} alt={dish.name} className="w-full h-56 md:h-64 object-cover" />
                    <div className="p-5 md:p-6">
                      <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 line-clamp-2">{dish.name}</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">{dish.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl md:text-2xl font-bold text-orange-600">
                          ₦{dish.price.toLocaleString()}
                        </span>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition shadow-md hover:shadow-lg">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
             {/* View All – only on mobile*/}
          <div className="mt-6 text-center md:hidden">
            <Link
              to="/explore"
              className="text-blue-600 hover:text-blue-800 font-medium text-base"
            >
              View All Categories
            </Link>
          </div>
          </div>

          {/* Jollof Rice & Entrees */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
              Jollof Rice & Entrees
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {jollofDishes.map((dish, index) => (
                <Link
                  key={index}
                  to={`/food/${index}`}
                  className="block hover:scale-[1.03] transition-transform duration-300"
                >
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <img src={dish.image} alt={dish.name} className="w-full h-56 md:h-64 object-cover" />
                    <div className="p-5 md:p-6">
                      <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 line-clamp-2">{dish.name}</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">{dish.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl md:text-2xl font-bold text-orange-600">
                          ₦{dish.price.toLocaleString()}
                        </span>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition shadow-md hover:shadow-lg">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
           {/* View All – only on mobile*/}
          <div className="mt-6 text-center md:hidden">
            <Link
              to="/explore"
              className="text-blue-600 hover:text-blue-800 font-medium text-base"
            >
              View All Categories
            </Link>
          </div>
          </div>

          {/* Swallow & Soups */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
              Swallow & Soups
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {swallowDishes.map((dish, index) => (
                <Link
                  key={index}
                  to={`/food/${index}`}
                  className="block hover:scale-[1.03] transition-transform duration-300"
                >
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <img src={dish.image} alt={dish.name} className="w-full h-56 md:h-64 object-cover" />
                    <div className="p-5 md:p-6">
                      <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 line-clamp-2">{dish.name}</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">{dish.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl md:text-2xl font-bold text-orange-600">
                          ₦{dish.price.toLocaleString()}
                        </span>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition shadow-md hover:shadow-lg">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
           {/* View All – only on mobile*/}
          <div className="mt-6 text-center md:hidden">
            <Link
              to="/explore"
              className="text-blue-600 hover:text-blue-800 font-medium text-base"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}