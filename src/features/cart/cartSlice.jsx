import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn('Could not load cart from localStorage:', e);
    return [];
  }
};

const saveCartToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.items);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.warn('Could not save cart to localStorage:', e);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromLocalStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity = (itemInCart.quantity || 0) + action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity });
      }
      saveCartToLocalStorage(state);
    },
    removeItem: (state, action) => { 
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      saveCartToLocalStorage(state);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      saveCartToLocalStorage(state);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, removeItem, updateQuantity, clearCart } = cartSlice.actions; 
export default cartSlice.reducer;
