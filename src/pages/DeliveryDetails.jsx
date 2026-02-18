import React from 'react';
import { Link } from 'react-router-dom';

export default function DeliveryDetails() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <main className="grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center md:text-left">
              Delivery Details
            </h1>

            {/* Delivery Address */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Delivery Address
              </h3>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-lg text-gray-800 mb-2">
                  Home: 123 Main Street, Victoria Island, Lagos
                </p>
                <p className="text-lg text-gray-800 mb-4">
                  Apt 4B, Opposite Mega Plaza
                </p>
                <Link
                  to="/change-address"
                  className="text-orange-600 hover:text-orange-700 font-medium transition"
                >
                  Change Address
                </Link>
              </div>
            </div>

            {/* Delivery Time */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Delivery Time
              </h3>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-xl font-medium text-gray-800">
                  ASAP (30-45 mins)
                </p>
              </div>
            </div>

            {/* Delivery Instructions */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Delivery Instructions (Optional)
              </h3>
              <textarea
                placeholder="E.g leave at the front of the door, knock twice..."
                className="w-full px-6 py-5 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[140px]"
                defaultValue="E.g leave at the front of the door, knock twice..."
              />
            </div>

            {/* Contact Number */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Number
              </h3>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-xl font-medium text-gray-800">
                  +234 801 234 5678
                </p>
              </div>
            </div>

              {/* Proceed to Payment */}
            <Link to="/payment" className="block w-full mt-10">
  <button className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-5 rounded-xl font-bold text-xl transition shadow-lg hover:shadow-xl">
    Proceed to Payment
  </button>
</Link>
          </div>
        </div>
      </main>
    </div>
  );
}