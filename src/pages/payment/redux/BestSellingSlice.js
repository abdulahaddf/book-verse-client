// BestSellingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bestSelling = createSlice({
  name: 'bestSelling',
  initialState: {
    bestSelling: [],
  },
  reducers: {
    setBestSelling: (state, action) => {
      state.bestSelling = action.payload.bestSelling;
    },
  },
});

export const { setBestSelling } = bestSelling.actions;
export default bestSelling.reducer;
