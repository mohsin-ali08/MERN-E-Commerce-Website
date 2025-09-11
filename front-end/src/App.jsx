import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";

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
          <Route path="product/:id" element={<ProductDetails/>} />
          <Route path="checkOut" element={<Checkout/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
