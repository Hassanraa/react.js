import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearOrderHistory } from '../features/orderHistorySlice'; 

const OrderHistory = () => {
  const orders = useSelector((state) => state.orderHistory.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('orderHistory', JSON.stringify(orders));
  }, [orders]);

  const handleClearHistory = () => {
    dispatch(clearOrderHistory()); 
    localStorage.removeItem('orderHistory');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      {orders.length === 0 ? (
        <p>No orders have been placed yet.</p>
      ) : (
        <>
          <button 
            onClick={handleClearHistory} 
            className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Clear History
          </button>
          <ul>
            {orders.map((order) => (
              <li key={order.id} className="mb-4">
                <div className="p-4 border rounded shadow">
                  <h2 className="font-bold">Order ID: {order.id}</h2>
                  <p>Date: {order.date}</p>
                  <h3 className="font-semibold">Items:</h3>
                  <ul>
                    {order.items.map((item) => (
                      <li key={item.id} className="mb-2">
                        {item.name} - PKR.{item.price} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default OrderHistory;
