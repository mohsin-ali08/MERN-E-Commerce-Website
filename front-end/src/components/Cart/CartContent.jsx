import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export default function CartContent() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Product 1",
      image: "https://picsum.photos/200?random=1",
      price: 20,
      color: "Red",
      size: "M",
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://picsum.photos/200?random=2",
      price: 35,
      color: "Blue",
      size: "L",
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://picsum.photos/200?random=3",
      price: 50,
      color: "Green",
      size: "XL",
      quantity: 1,
    },
    {
      id: 4,
      name: "Product 4",
      image: "https://picsum.photos/200?random=4",
      price: 28,
      color: "Black",
      size: "S",
      quantity: 1,
    },
  ]);

  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div
      className="flex-1 overflow-y-auto p-4 space-y-4
                 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-100"
    >
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 p-4 rounded-lg shadow-md 
                     bg-gradient-to-r from-gray-50 to-white hover:shadow-lg 
                     transition-transform transform hover:scale-[1.02]"
        >
          {/* Product Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 rounded-md object-cover border border-gray-200"
          />

          {/* Product Info */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-500 text-sm">
              Color: <span className="font-medium">{item.color}</span> | Size:{" "}
              <span className="font-medium">{item.size}</span>
            </p>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => decrement(item.id)}
                className="p-1.5 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                <FaMinus className="text-gray-600" />
              </button>
              <span className="font-semibold text-gray-800">
                {item.quantity}
              </span>
              <button
                onClick={() => increment(item.id)}
                className="p-1.5 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                <FaPlus className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Price + Delete */}
          <div className="flex flex-col items-end gap-3">
            <p className="text-lg font-bold text-red-600">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              onClick={() => removeItem(item.id)}
              className="text-gray-400 hover:text-red-600 transition"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
