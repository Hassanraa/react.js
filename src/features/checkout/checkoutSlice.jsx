// src/features/checkout/checkoutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    step: 1,
    shippingAddress: null,
    paymentInfo: null,
    orderSummary: null,
  },
  reducers: {
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    setPaymentInfo: (state, action) => {
      state.paymentInfo = action.payload;
    },
    setOrderSummary: (state, action) => {
      state.orderSummary = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    previousStep: (state) => {
      state.step -= 1;
    },
  },
});

export const { setShippingAddress, setPaymentInfo, setOrderSummary, nextStep, previousStep } = checkoutSlice.actions;
export default checkoutSlice.reducer;
