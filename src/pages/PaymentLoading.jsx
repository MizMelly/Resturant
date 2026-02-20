import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentLoading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('../order-success'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent mb-6"></div>
      <p className="text-lg font-semibold text-gray-700">
        Processing payment...
      </p>
    </div>
  );
}
