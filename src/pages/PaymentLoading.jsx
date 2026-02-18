export default function OrderFailed() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
        <div className="text-red-500 text-6xl mb-6">✗</div>
        <h1 className="text-3xl font-bold mb-4">Payment Failed</h1>
        <p className="text-gray-600 mb-8">
          Something went wrong. Please try again or contact support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/payment"
            className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition"
          >
            Try Again
          </Link>
          <Link
            to="/cart"
            className="bg-gray-200 text-gray-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-300 transition"
          >
            Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}