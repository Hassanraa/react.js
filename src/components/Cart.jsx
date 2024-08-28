import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, clearCart, removeItem } from '../features/cart/cartSlice';
import { addOrder } from '../features/orderHistorySlice';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleOrderConfirm = () => {
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const order = {
      id: Date.now(),
      items: [...items],
      date: new Date().toLocaleString(),
    };

    dispatch(addOrder(order));
    dispatch(clearCart());
    alert('Order Confirmed! Thank you for your purchase.');
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="font-bold">{item.name}</h2>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                    className="border rounded p-1"
                  />
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-600 text-white p-2 rounded hover:bg-red-700 ml-4"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            <p className="font-bold">Total: PKR.{totalPrice.toFixed(2)}</p>
            <div>
              <button
                onClick={handleClearCart}
                className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
              >
                Clear Cart
              </button>
              <button
                onClick={handleOrderConfirm}
                className="bg-green-600 text-white p-2 rounded hover:bg-green-700 ml-2"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
