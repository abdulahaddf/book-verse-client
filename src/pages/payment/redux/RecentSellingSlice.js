import { createSlice } from '@reduxjs/toolkit';

const recentSelling = createSlice({
  name: 'recentSelling',
  initialState: {
    recentSelling: [],
  },
  reducers: {
    setRecentSelling: (state, action) => {
      state.recentSelling = action.payload.recentSelling;
    },
  },
});

export const { setRecentSelling } = recentSelling.actions;
export default recentSelling.reducer;