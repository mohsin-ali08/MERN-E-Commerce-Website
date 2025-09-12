import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Stripe test key (replace later with your own)
const stripePromise = loadStripe(
  "pk_test_51S6dXOFYVtn3P4ApL7GP10blKsJx2HQQxgsmNizNitzsXzFSZjvzJTxlPyKXEB0k8PXoKwg3KbQWnNupPyVVwwdz00bMp0LB3r"
);

const cart = {
  products: [
    {
      name: "Classic T-Shirt",
      size: "M",
      color: "Blue",
      price: 19.99,
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      name: "Running Shoes",
      size: "42",
      color: "Black",
      price: 59.99,
      image: "https://picsum.photos/200/300?random=2",
    },
    {
      name: "Denim Jacket",
      size: "L",
      color: "Light Blue",
      price: 89.99,
      image: "https://picsum.photos/200/300?random=3",
    },
  ],
  totalPrice: 100,
};

// Stripe Payment Form
const StripePaymentForm = ({ amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    // demo only
    alert("This is a demo. Normally paymentIntent confirm hota yahan.");
    onSuccess({ id: "demo_txn_123", amount });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 border rounded-lg bg-white shadow-sm">
        <CardElement className="p-3 border rounded" />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium shadow-md transition"
      >
        Pay ${amount}
      </button>
    </form>
  );
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId("stripe-checkout");
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment Successful ", details);
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-12 px-6">
      {/* Left Section */}
      <div className="bg-white rounded-lg shadow-md p-8 border">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
          Checkout
        </h1>
        <form onSubmit={handleCreateCheckout} className="space-y-6">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Contact Details
            </h3>
            <input
              type="email"
              value="mohsinalisurhio08@gmail.com"
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600"
              disabled
            />
          </div>

          {/* Delivery */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Delivery Address
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded-lg"
                required
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded-lg"
                required
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 border rounded-lg mb-4"
              required
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
            />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 border rounded-lg"
                required
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-3 border rounded-lg"
                required
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
              />
            </div>
            <input
              type="text"
              placeholder="Country"
              className="w-full p-3 border rounded-lg mb-4"
              required
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 border rounded-lg"
              required
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
            />
          </div>

          {/* Buttons */}
          <div className="pt-4">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-900 text-white py-3 rounded-lg font-medium transition"
              >
                Continue to Payment
              </button>
            ) : (
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Payment
                </h3>
                <Elements stripe={stripePromise}>
                  <StripePaymentForm
                    amount={cart.totalPrice}
                    onSuccess={handlePaymentSuccess}
                  />
                </Elements>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="bg-white rounded-lg shadow-md p-8 border">
        <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">
          Order Summary
        </h3>
        <div className="space-y-4 mb-6">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium text-gray-800">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {product.size} / {product.color}
                  </p>
                </div>
              </div>
              <p className="font-medium text-gray-800">
                ${product.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-2 text-lg">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>${cart.totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="text-emerald-600 font-medium">Free</span>
          </div>
          <div className="flex justify-between border-t pt-4 font-semibold text-gray-900">
            <span>Total</span>
            <span>${cart.totalPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
