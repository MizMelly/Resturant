import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Explore from "./components/Explore";
import FoodDetails from "./components/FoodDetails";
import Cart from "./pages/Cart";
import OrderSummary from "./pages/OrderSummary";
import DeliveryDetails from "./pages/DeliveryDetails";
import Account from "./components/Account";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import PaymentLoading from "./pages/PaymentLoading";


import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <Routes>

      {/* Pages WITH Navbar & Footer */}
      <Route element={<MainLayout />}>
     
      
        <Route path="home" element={<Home />} /> 
        <Route path="explore" element={<Explore />} />
        <Route path="food/:id" element={<FoodDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="delivery-details" element={<DeliveryDetails />} />
          <Route path="order-success" element={<OrderSuccess />} />
          <Route path="payment-loading" element={<PaymentLoading />} />
        <Route path="account" element={<Account />} />
        <Route path="payment" element={<Payment />} />
      </Route>

      {/* Auth pages WITHOUT layout */}
       <Route path="/" element={<Welcome />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
  );
}

