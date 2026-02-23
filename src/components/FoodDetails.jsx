import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dishImage from "../assets/food detail.png";

export default function FoodDetails() {
  const [protein, setProtein] = useState("chicken");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* IMAGE – on top on mobile, left on desktop */}
        <div className="w-full md:w-1/2 md:h-screen overflow-hidden order-1 md:order-none">
          <img
            src={dishImage}
            alt="Jollof Rice with Fried Chicken"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT PANEL – below image on mobile */}
        <div className="w-full md:w-1/2 bg-white md:px-10 md:py-10 p-6 relative flex flex-col order-2 md:order-none">
          {/* Close button – now functional */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-5 right-5 w-9 h-9 bg-black/80 text-white text-xl flex items-center justify-center rounded-full shadow-md z-10 hover:bg-black transition"
          >
            ✕
          </button>

          {/* SINGLE CARD — everything inside */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 md:p-8 flex-1 flex flex-col">
            {/* Dish info */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Jollof Rice with Fried Chicken
            </h1>

            <p className="text-2xl md:text-3xl text-orange-600 font-bold mb-4">
              ₦2,800
            </p>

            <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-[15px]">
              Our signature Jollof rice, cooked to perfection with aromatic spices,
              served with juicy, golden-fried chicken. A classic Nigerian comfort
              food, rich in flavor and satisfying. Perfect for a quick lunch or a
              hearty dinner.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
              <span className="inline-flex items-center px-4 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full">
                🌶 Mildly spicy
              </span>
              <span className="inline-flex items-center px-4 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full">
                🥗 Vegetarian option available
              </span>
              <span className="inline-flex items-center px-4 py-1.5 text-orange-600 hover:underline cursor-pointer text-sm font-medium">
                View Allergies
              </span>
            </div>

            <hr className="border-gray-200 mb-8" />

            {/* Customize section */}
            <h3 className="font-semibold text-xl mb-6">Customize Your Meal</h3>

            {/* Choose Protein – allow multiple selection */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">Choose Your Protein</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between border border-gray-300 rounded-xl px-5 py-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox" // Changed from radio to checkbox
                      name="protein-chicken"
                      checked={protein.includes("chicken")}
                      onChange={() => {
                        setProtein((prev) =>
                          prev.includes("chicken")
                            ? prev.filter((p) => p !== "chicken")
                            : [...prev, "chicken"]
                        );
                      }}
                      className="w-5 h-5 accent-orange-500"
                    />
                    <span className="font-medium">Fried Chicken</span>
                  </div>
                  <span className="text-sm text-gray-500">(Default)</span>
                </label>

                <label className="flex items-center justify-between border border-gray-300 rounded-xl px-5 py-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox" // Changed from radio to checkbox
                      name="protein-fish"
                      checked={protein.includes("fish")}
                      onChange={() => {
                        setProtein((prev) =>
                          prev.includes("fish")
                            ? prev.filter((p) => p !== "fish")
                            : [...prev, "fish"]
                        );
                      }}
                      className="w-5 h-5 accent-orange-500"
                    />
                    <span className="font-medium">Grilled Fish</span>
                  </div>
                  <span className="text-sm text-gray-500">+₦500</span>
                </label>

                <label className="flex items-center justify-between border border-gray-300 rounded-xl px-5 py-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox" // Changed from radio to checkbox
                      name="protein-beef"
                      checked={protein.includes("beef")}
                      onChange={() => {
                        setProtein((prev) =>
                          prev.includes("beef")
                            ? prev.filter((p) => p !== "beef")
                            : [...prev, "beef"]
                        );
                      }}
                      className="w-5 h-5 accent-orange-500"
                    />
                    <span className="font-medium">Beef</span>
                  </div>
                  <span className="text-sm text-gray-500">+₦700</span>
                </label>
              </div>
            </div>

            {/* Extra Sides */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4">
                Extra Sides <span className="text-gray-400 font-normal">(Optional)</span>
              </h4>
              <div className="space-y-3">
                {[
                  { name: "Fried Plantain", price: 700 },
                  { name: "Coleslaw", price: 500 },
                  { name: "Extra Pepper Sauce", price: 300 },
                ].map((item) => (
                  <label
                    key={item.name}
                    className="flex items-center justify-between border border-gray-300 rounded-xl px-5 py-4 cursor-pointer hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-orange-500"
                      />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">+₦{item.price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Special Instructions */}
            <div className="mt-auto">
              <h4 className="font-semibold text-lg mb-3">Special Instructions</h4>
              <textarea
                rows={4}
                placeholder="E.g no onion, reduce pepper, make it very hot, extra tasty..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}