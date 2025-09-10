import React from "react";
import MyOrders from "./MyOrdersPage";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     

      {/* Content */}
      <div className="container mx-auto p-2 flex flex-col md:flex-row gap-3">
        {/* Left Sidebar (Admin Info) */}
        <aside className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <img
            src="https://picsum.photos/150" // Placeholder admin avatar
            alt="Admin Avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-md mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Mohsin Ali</h2>
          <p className="text-gray-600">mohsin@gmail.com</p>

          <div className="mt-6 w-full">
            <button className="w-full bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-lg transition mb-3">
              Dashboard
            </button>
            <button className="w-full bg-gray-300  font-semibold hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg transition mb-3">
              Orders
            </button>
            <button className="w-full bg-gray-300 font-semibold hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg transition mb-3">
              Users
            </button>
            <button className="w-full font-semibold bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
            Logout
          </button>
           
          </div>
        </aside>

        {/* Right Section (Orders / Main Content) */}
        <main className="w-full md:w-2/3 lg:w-3/4 bg-white rounded-lg shadow-md p-6">
          <MyOrders />
        </main>
      </div>
    </div>
  );
};

export default Profile;
