import { createSlice } from '@reduxjs/toolkit';

const loadOrderHistoryFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('orderHistory');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn('Could not load order history from localStorage:', e);
    return [];
  }
};

const saveOrderHistoryToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.orders);
    localStorage.setItem('orderHistory', serializedState);
  } catch (e) {
    console.warn('Could not save order history to localStorage:', e);
  }
};

const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState: {
    orders: loadOrderHistoryFromLocalStorage(),
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      saveOrderHistoryToLocalStorage(state); 
    },
    clearOrderHistory: (state) => {
      state.orders = []; 
      localStorage.removeItem('orderHistory'); 
    },
  },
});

export const { addOrder, clearOrderHistory } = orderHistorySlice.actions;
export default orderHistorySlice.reducer;
