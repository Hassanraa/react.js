import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [
      { id: 1, name: 'T-Shirt', price: 29.99, image: '/images/tshirt.jpg' },
      { id: 2, name: 'Jeans', price: 49.99, image: '/images/jeans.jpg' },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export const selectProducts = (state) => state.products.items;
export default productsSlice.reducer;
