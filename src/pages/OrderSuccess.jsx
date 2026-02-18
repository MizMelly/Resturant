import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  const orderId = "123RGR231567Y"; 

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Main Success Content */}
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          {/* Big green checkmark */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-6xl md:text-8xl font-bold">✓</span>
            </div>
          </div>

          {/* Main message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Order Placed Successfully!
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Your delicious Chuks Kitchen meal is on its way!
          </p>

          {/* Order ID */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <p className="text-lg font-medium text-gray-800">
              Order <span className="font-bold">#{orderId}</span> Confirmed
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/track-order" // or /my-orders or dynamic /order/:id
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg transition shadow-md hover:shadow-lg"
            >
              Track Order
            </Link>

            <Link
              to="/receipt" // or generate PDF / show receipt
              className="block text-orange-600 hover:text-orange-700 font-medium text-lg transition"
            >
              Generate Receipt
            </Link>
          </div>

          {/* Help link */}
          <p className="mt-10 text-gray-600">
            Need help with your order?{' '}
            <Link to="/support" className="text-orange-600 hover:underline font-medium">
              Contact us
            </Link>
          </p>
        </div>
      </main>

    
    </div>
  );
}