import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  users: [],
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id);
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const selectProducts = (state) => state.admin.products;


export const { addProduct, updateProduct, deleteProduct, addUser, updateUser, deleteUser } = adminSlice.actions;


export default adminSlice.reducer;
