import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const totalAmount = 9900;
  const navigate = useNavigate(); // <-- useNavigate hook

  const handlePay = () => {
    // Example: simulate payment processing
    const success = Math.random() > 0.3; // 70% chance of success
    if (success) {
      navigate('/payment-loading'); // go to loading page
    } else {
      navigate('/order-failed'); // go to failure page
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-auto">
        {/* Header */}
        <div className="px-6 py-8 border-b border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Payment
          </h1>
        </div>

        {/* Main Form Content */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Pay With Section */}
          <div>
            <label className="block text-xl font-semibold text-gray-900 mb-4">
              Pay With:
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              {['card', 'bank', 'transfer'].map((method) => (
                <label key={method} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                    className="w-5 h-5 accent-orange-500"
                  />
                  <span className="text-lg font-medium text-gray-800">
                    {method.charAt(0).toUpperCase() + method.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Card Details */}
          {paymentMethod === 'card' && (
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9011 1213"
                  maxLength={19}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-2">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    maxLength={4}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="saveCard"
                  className="w-5 h-5 accent-orange-500 rounded"
                />
                <label htmlFor="saveCard" className="text-base text-gray-700 cursor-pointer">
                  Save card details
                </label>
              </div>
            </div>
          )}

          {/* Pay Button */}
          <div className="pt-6">
            <button
              onClick={handlePay} // <-- add this
              className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-5 rounded-xl font-bold text-xl transition shadow-md hover:shadow-lg"
            >
              Pay ₦{totalAmount.toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
