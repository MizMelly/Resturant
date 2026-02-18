import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderSummary() {

  const order = {
    subtotal: 9200,
    deliveryFee: 500,
    serviceFee: 200,
    tax: 0,
    total: 9900,
    deliveryAddress: "123 Taste Blvd, Lagos, Nigeria",
    deliveryTime: "45–60 minutes",
    paymentMethod: "Card ending in 4242",
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Big white card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
              Order Summary
            </h1>

            {/* Promo Code */}
            <div className="mb-10">
              <label className="block text-lg font-medium text-gray-900 mb-3">
                Add a Promo Code
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter Code here"
                  className="flex-grow px-6 py-4 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition shadow-md hover:shadow-lg">
                  Apply
                </button>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-4 mb-10">
              <div className="flex justify-between text-lg text-gray-700">
                <span>Subtotal</span>
                <span>₦{order.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg text-gray-700">
                <span>Delivery Fee</span>
                <span>₦{order.deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg text-gray-700">
                <span>Service Fee</span>
                <span>₦{order.serviceFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg text-gray-700">
                <span>Tax</span>
                <span>₦{order.tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-2xl font-bold border-t border-gray-300 pt-4 mt-4">
                <span>Total</span>
                <span className="text-orange-600">₦{order.total.toLocaleString()}</span>
              </div>
            </div>

            {/* Delivery / Pickup Toggle */}
            <div className="mb-10">
              <div className="flex rounded-full overflow-hidden border border-gray-300 bg-gray-100">
                <button className="flex-1 py-4 text-lg font-medium bg-orange-500 text-white">
                  Delivery
                </button>
                <button className="flex-1 py-4 text-lg font-medium text-gray-700 hover:bg-gray-200 transition">
                  Pickup
                </button>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="mb-10">
              <label className="block text-lg font-medium text-gray-900 mb-3">
                Special Instructions for Restaurant
              </label>
              <textarea
                placeholder="E.g no onion, food is too spicy, food is too hot..."
                className="w-full px-6 py-5 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[120px]"
                defaultValue="E.g no onion, food is too spicy, food is too hot hhhhhhhhhhh food is tasty"
              />
            </div>

            {/* Final Proceed Button */}
            <Link
              to="/delivery-details"
              className="block w-full"
            >
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-xl font-bold text-xl transition shadow-lg hover:shadow-xl">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}