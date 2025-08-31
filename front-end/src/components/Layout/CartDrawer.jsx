import { FiX } from "react-icons/fi";
import CartContent from "../Cart/CartContent";


const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  // Example items (later replace with props or global state)
  const cartItems = [
    { name: "Product 1", qty: 1, price: 20 },
    { name: "Product 2", qty: 2, price: 35 },
    { name: "Product 3", qty: 1, price: 50 },
  ];

  return (
    <div>
      {/* Overlay */}
      {drawerOpen && (
        <div
          onClick={toggleCartDrawer}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-80 sm:w-96 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 flex flex-col
        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">My Cart</h2>
          <button
            onClick={toggleCartDrawer}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Cart Content */}
        <CartContent items={cartItems} />

        {/* Footer */}
        <div className="p-4 border-t">
          <button className="w-full bg-black text-white py-2 rounded-lg transition">
            Checkout
          </button>
          <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
            Shipping, taxes, and discount codes calculated at checkout...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
