import { useState } from "react";
import {
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="bg-white  top-0 z-50 ">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-2">
          {/* Left - Logo */}
          <div className="text-2xl font-extrabold cursor-pointer text-red-600 tracking-wide">
            Rabbit 🛍️
          </div>

          {/* Center - Nav Links */}
<div className="hidden md:flex gap-8 text-gray-700 font-medium text-sm">
  <Link
    to="/collection/all"
    
    className="relative group"
  >
    MEN
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link

    to="/collection/women"
    className="relative group"
  >
    WOMEN
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="/collection/top-wear"
    className="relative group"
  >
    TOP WEAR
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="/collection/bottom-wear"
    className="relative group"
  >
    BOTTOM WEAR
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>
</div>



          {/* Right - Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            <Link to="/profile">
              <HiOutlineUser className="cursor-pointer hover:text-red-600 transition text-2xl" />
            </Link>

            {/* Cart with Badge */}
            <button
              onClick={toggleCartDrawer}
              className="relative cursor-pointer p-2 rounded-full hover:bg-red-50 transition"
            >
              <HiOutlineShoppingBag className="text-2xl hover:text-red-600 transition" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                3
              </span>
            </button>

            {/* SearchBar */}
            <SearchBar />

            {/* Hamburger Menu (mobile only) */}
            <div className="md:hidden">
              {isOpen ? (
                <HiOutlineX
                  onClick={() => setIsOpen(false)}
                  className="text-3xl cursor-pointer hover:text-red-600 transition"
                />
              ) : (
                <HiOutlineMenu
                  onClick={() => setIsOpen(true)}
                  className="text-3xl cursor-pointer hover:text-red-600 transition"
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden bg-gray-50 border-t border-gray-200 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
            {["MEN", "WOMEN", "TOP WEAR", "BOTTOM WEAR"].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-red-600 transition"
              >
                {link}
              </a>
            ))}

            {/* Mobile Icons inside menu */}
            <div className="flex gap-6 mt-4">
              <HiOutlineUser className="cursor-pointer hover:text-red-600 transition text-2xl" />
              <div
                className="relative cursor-pointer"
                onClick={toggleCartDrawer}
              >
                <HiOutlineShoppingBag className="text-2xl hover:text-red-600 transition" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  3
                </span>
              </div>
              <SearchBar />
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
}
