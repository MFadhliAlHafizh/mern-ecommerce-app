import { useContext, useEffect, useState } from "react";
import { dummyOrders } from "../assets/assets";
import { AppContext } from "../context/AppContext";

export const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency } = useContext(AppContext);

  const fetchMyOrders = async () => {
    setMyOrders(dummyOrders);
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl md:text-3xl font-medium uppercase">My Orders</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>
      {myOrders.map((order) => (
        <div
          key={order._id}
          className="border border-gray-300 px-4 py-5 rounded-lg mb-10 max-w-4xl"
        >
          <p className="flex justify-between md:items-center text-gray-400 md:font-medium">
            <span>Order ID: {order._id}</span>
            <span>Payment: {order.paymentType}</span>
            <span>
              Total Amount: {currency}
              {order.amount}
            </span>
          </p>
          {order.items.map((item, index) => (
            <div
              key={index}
              className={`relative max-w-4xl bg-white text-gray-500/70 flex flex-col md:flex-row md:items-center justify-between md:gap-16 px-4 py-5 w-full border-gray-300 ${order.items.length !== index + 1 && "border-b"}`}
            >
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <img
                    src={item.product.image[0]}
                    alt="Product Image"
                    className="w-16 h-16"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-medium text-gray-800">
                    {item.product.name}
                  </h2>
                  <p>Category: {item.product.category}</p>
                </div>
              </div>

              <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0">
                <p>Quantity: {item.quantity || "1"}</p>
                <p>Status: {order.status}</p>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>

              <p className="text-primary text-lg font-medium">
                Amount: {currency}
                {item.product.offerPrice * item.quantity}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
