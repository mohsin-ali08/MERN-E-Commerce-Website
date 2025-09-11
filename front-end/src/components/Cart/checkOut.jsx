import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";

const { Option } = Select;

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
  totalPrice: 192,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const countries = ["United States", "Pakistan", "United Kingdom", "Canada", "Australia"];

  const handleChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (value) => {
    setShippingAddress({ ...shippingAddress, country: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shipping Address:", shippingAddress);
    navigate("/success");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6">
      {/* Left Section - Shipping Form */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-6 uppercase">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Contact Details */}
          <div>
            <h3 className="text-md font-semibold mb-2">Contact Details</h3>
            <input
              type="email"
              value="mohsin@gmail.com"
              readOnly
              className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* First & Last Name */}
            <h3 className="text-md font-semibold">Delivery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 "
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 "
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <input
            type="text"
            name="address"
            value={shippingAddress.address}
            required
            placeholder="Address"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 "
            onChange={handleChange}
          />

          {/* City & Postal Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 "
              onChange={handleChange}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 "
              onChange={handleChange}
            />
          </div>

          {/* Country - AntD Select */}
          <Select
            placeholder="Select Country"
            style={{ width: "100%", borderRadius: "8px" }}
            onChange={handleCountryChange}
            dropdownStyle={{ borderRadius: "10px", border: "1px solid gray" }}
          >
            {countries.map((c, i) => (
              <Option key={i} value={c}>
                {c}
              </Option>
            ))}
          </Select>

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
            onChange={handleChange}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Right Section - Cart Summary */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-6">Your Cart</h2>
        <div className="space-y-4">
          {cart.products.map((product, i) => (
            <div key={i} className="flex items-center gap-4 border-b pb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">
                  Size: {product.size}, Color: {product.color}
                </p>
              </div>
              <p className="font-semibold">${product.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-6 text-lg font-semibold">
          <span>Total:</span>
          <span>${cart.totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
