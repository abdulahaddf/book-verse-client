import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    addToCartData: [],
    finalAmount: 0,
  },
  reducers: {
    setCartData: (state, action) => {
      state.addToCartData = action.payload.addToCartData;
      state.finalAmount = action.payload.finalAmount;
    },
  },
});

export const { setCartData } = cartSlice.actions;
export default cartSlice.reducer;