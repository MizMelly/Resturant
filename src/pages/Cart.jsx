import React from "react";
import { Link } from "react-router-dom";

import cartItem1 from "../assets/cart1.png";
import cartItem2 from "../assets/cart2.png";
import cartItem3 from "../assets/cart3.png";
import cartItem4 from "../assets/cart4.png";

export default function Cart() {
  const cartItems = [
    { name: "Jollof Rice & Fried Chicken", note: "With plantain, extra pepper sauce", quantity: 1, price: 3200, image: cartItem1 },
    { name: "Jollof Rice & Fried Chicken", note: "With plantain, extra pepper sauce", quantity: 1, price: 3200, image: cartItem2 },
    { name: "Jollof Rice & Fried Chicken", note: "With plantain, extra pepper sauce", quantity: 1, price: 3200, image: cartItem3 },
    { name: "Jollof Rice & Fried Chicken", note: "With plantain, extra pepper sauce", quantity: 1, price: 3200, image: cartItem4 },
  ];

  return (
    <div className="min-h-screen bg-gray-200 md:bg-gray-50 flex justify-center py-6">
      {/* Big Card */}
      <div className="w-full max-w-sm md:max-w-6xl bg-white rounded-2xl shadow-xl p-6 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
        </div>

        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row bg-white rounded-xl shadow-md border border-black overflow-hidden items-start"
            >
              {/* Image */}
              <div className="w-28 h-28 flex-shrink-0 overflow-hidden rounded-l-xl mt-3 mb-3 md:mt-0 md:mb-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-3 flex flex-col">
                {/* Name */}
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {item.name}
                </h3>

                {/* Mobile: description → quantity → price + x (stacked vertically) */}
                {/* Desktop: unchanged (your original layout) */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-4">
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-2 md:mb-0 flex-1">
                    {item.note}
                  </p>

                  {/* Quantity + price + delete */}
                  <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2">
                    {/* Quantity – directly under description on mobile */}
                    <div className="flex items-center gap-2">
                      <button className="w-7 h-7 bg-gray-300 text-gray-800 rounded font-bold">−</button>
                      <span className="text-base font-semibold w-5 text-center">{item.quantity}</span>
                      <button className="w-7 h-7 bg-gray-300 text-gray-800 rounded font-bold">+</button>
                    </div>

                    {/* Price + Delete – under quantity on mobile, same line on desktop */}
                    <div className="flex items-center justify-between md:justify-start gap-4">
                      <span className="text-xl font-bold text-orange-600 whitespace-nowrap">
                        ₦{item.price.toLocaleString()}
                      </span>
                      <button className="w-7 h-7 bg-orange-500 text-white rounded font-bold">×</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="space-y-4">
          <Link to="/explore" className="flex items-center gap-2 text-blue-600 text-base">
            <span className="text-lg">＋</span>
            Add more items from Chuks Kitchen
          </Link>

          <Link to="/order-summary">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg">
              Proceed to Checkout
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}