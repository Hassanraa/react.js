import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import cartReducer from './features/cart/cartSlice';
import checkoutReducer from './features/checkout/checkoutSlice';
import adminReducer from './features/admin/adminSlice';
import authReducer from './features/authSlice';
import orderHistoryReducer from './features/orderHistorySlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    admin: adminReducer,
    auth: authReducer,
    orderHistory: orderHistoryReducer,
  },
});
