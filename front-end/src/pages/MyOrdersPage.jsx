import React, { useEffect, useState } from "react";


const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Mock API call
    setTimeout(() => {
      setOrders([
        {
          id: "ORD-1001",
          createdAt: new Date(),
          shippingAddress: {
            street: "123 Main St",
            city: "Karachi",
            country: "Pakistan",
          },
          orderItems: [
            {
              id: 1,
              img: "https://picsum.photos/80?random=1",
              name: "Product A",
              quantity: 2,
              price: 50,
            },
           
          ],
          status: "Completed",
        },
        {
          id: "ORD-1002",
          createdAt: new Date(),
          shippingAddress: {
            street: "45 Street Ave",
            city: "Lahore",
            country: "Pakistan",
          },
          orderItems: [
            {
              id: 3,
              img: "https://picsum.photos/80?random=3",
              name: "Product C",
              quantity: 3,
              price: 30,
            },
          ],
          status: "Pending",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">📦 Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">Loading orders...</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-md">
          <table className="w-full text-xs border-collapse">
            <thead className="bg-gray-300 text-black">
              <tr>
                <th className="px-4 py-2 border">IMAGES</th>
                <th className="px-4 py-2 border">ORDER ID</th>
                <th className="px-4 py-2 border">CREATED</th>
                <th className="px-4 py-2 border">SHIPPING ADDRESS</th>
                <th className="px-4 py-2 border">ITEMS</th>
                <th className="px-4 py-2 border">PRICE</th>
                <th className="px-4 py-2 border">STATUS</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders.map((order) => {
                const total = order.orderItems.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                );
                return (
                  <tr
                    key={order.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    {/* IMAGES */}
                    <td className="px-4 py-2 flex gap-2">
                      {order.orderItems.map((item) => (
                        <img
                          key={item.id}
                          src={item.img}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded border"
                        />
                      ))}
                    </td>

                    {/* ORDER ID */}
                    <td className="px-4 py-2 font-semibold">{order.id}</td>

                    {/* CREATED */}
                    <td className="px-4 py-2">
                      {order.createdAt.toLocaleDateString()}
                    </td>

                    {/* SHIPPING ADDRESS */}
                    <td className="px-4 py-2">
                      {order.shippingAddress.street},{" "}
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.country}
                    </td>

                    {/* ITEMS */}
                    <td className="px-4 py-2">
                      {order.orderItems.map((item) => (
                        <div key={item.id} className="text-sm">
                          {item.name} (x{item.quantity})
                        </div>
                      ))}
                    </td>

                    {/* PRICE */}
                    <td className="px-4 py-2 font-bold">${total}</td>

                    {/* STATUS */}
                    <td className="px-4 py-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
