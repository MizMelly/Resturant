import React from 'react';
import { Link } from 'react-router-dom';

// Replace with your actual images
import cartItem1 from "../assets/cart1.png";
import cartItem2 from "../assets/cart2.png";
import cartItem3 from "../assets/cart3.png";
import cartItem4 from "../assets/cart4.png";

export default function Cart() {
  const cartItems = [
    {
      name: "Jollof Rice & Fried Chicken",
      note: "With plantain, extra pepper sauce",
      quantity: 1,
      price: 3200,
      image: cartItem1,
    },
    {
      name: "Jollof Rice & Fried Chicken",
      note: "With plantain, extra pepper sauce",
      quantity: 1,
      price: 3200,
      image: cartItem2,
    },
    {
      name: "Jollof Rice & Fried Chicken",
      note: "With plantain, extra pepper sauce",
      quantity: 1,
      price: 3200,
      image: cartItem3,
    },
    {
      name: "Jollof Rice & Fried Chicken",
      note: "With plantain, extra pepper sauce",
      quantity: 1,
      price: 3200,
      image: cartItem4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        {/* Big card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

          {/* Heading */}
          <div className="px-6 py-6 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Cart
            </h1>
          </div>

          {/* Items */}
          <div className="divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="px-5 py-6 sm:px-6 flex flex-col sm:flex-row items-start gap-5 hover:bg-gray-50/60 transition-colors"
              >
                {/* Image */}
                <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow w-full">
                  {/* First line: name + controls + price + × */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-1.5">
                    <h3 className="text-xl font-bold text-orange-600 flex-grow min-w-0">
                      {item.name}
                    </h3>

                    {/* Quantity controls – + and − each in small box, no box around number */}
                    <div className="flex items-center gap-1.5 text-lg">
                      <button className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded bg-white hover:bg-gray-50 text-gray-800 font-bold transition text-xl">
                        +
                      </button>
                      <span className="text-xl font-semibold min-w-[2ch] text-center">
                        {item.quantity}
                      </span>
                      <button className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded bg-white hover:bg-gray-50 text-gray-800 font-bold transition text-xl">
                        −
                      </button>
                    </div>

                    {/* Price */}
                    <span className="text-xl md:text-2xl font-bold text-orange-600 whitespace-nowrap">
                      ₦{item.price.toLocaleString()}
                    </span>

                    {/* Remove */}
                    <button
                      className="text-red-600 hover:text-red-800 text-2xl font-bold ml-auto sm:ml-0"
                      aria-label="Remove item"
                    >
                      ×
                    </button>
                  </div>

                  {/* Second line: note */}
                  <p className="text-sm text-gray-600">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-6 bg-gray-50 border-t border-gray-200">
            <Link
              to="/explore"
              className="text-orange-600 hover:text-orange-700 font-medium text-lg flex items-center justify-start gap-2 transition"
            >
              + Add more items from Chuks Kitchen
            </Link>
            <Link to="/order-summary" className="block mt-4">
             <button className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-4 rounded-xl font-bold text-lg transition shadow-md">
              Proceed to Checkout</button>
              </Link>
              </div>
              </div>
              </main>
    </div>
  );
}