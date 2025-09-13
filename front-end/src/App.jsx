import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import Checkout from "./components/Cart/Checkout";


const stripePromise = loadStripe("pk_test_51S6dXOFYVtn3P4ApL7GP10blKsJx2HQQxgsmNizNitzsXzFSZjvzJTxlPyKXEB0k8PXoKwg3KbQWnNupPyVVwwdz00bMp0LB3r");


function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collection/all" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Elements stripe={stripePromise}><Checkout /></Elements>}/>
          <Route path="/order-confirmation" element={<OrderConfirmationPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
