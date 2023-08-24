// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './CartSlice';
// import thunk from 'redux-thunk';

// import bestSellingReducer from './BestSellingSlice';

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     bestSelling: bestSellingReducer,
//   },
//   middleware: [thunk],
// });

// export default store;

// store.js

// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import bestSellingReducer from './BestSellingSlice';

// import recentSellingSliceReducer from './RecentSellingSlice';

// const bestSellingMiddleware = store => next => action => {
//   next(action);

//   const state = store.getState();
//   localStorage.setItem('bestSelling', JSON.stringify(state));
// };

// const persistedState = localStorage.getItem('bestSelling');
// const preloadedState = persistedState ? JSON.parse(persistedState) : {};

// const store = configureStore({
//   reducer: {
//     bestSelling: bestSellingReducer,
//     recentSelling:recentSellingSliceReducer
//   },
//   middleware: [bestSellingMiddleware, thunk],
//   preloadedState,
// });

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bestSellingReducer from './BestSellingSlice';
import recentSellingSliceReducer from './RecentSellingSlice';

// Middleware to handle saving data to localStorage
const saveToLocalStorage = (store) => (next) => (action) => {
  next(action);

  const state = store.getState();
  localStorage.setItem('bestSelling', JSON.stringify(state.bestSelling));
  localStorage.setItem('recentSelling', JSON.stringify(state.recentSelling));
};

// Load data from localStorage during store initialization
const persistedBestSellingState = localStorage.getItem('bestSelling');
const persistedRecentSellingState = localStorage.getItem('recentSelling');

const preloadedState = {
  bestSelling: persistedBestSellingState
    ? JSON.parse(persistedBestSellingState)
    : undefined,
  recentSelling: persistedRecentSellingState
    ? JSON.parse(persistedRecentSellingState)
    : undefined,
};

const store = configureStore({
  reducer: {
    bestSelling: bestSellingReducer,
    recentSelling: recentSellingSliceReducer,
  },
  middleware: [thunk, saveToLocalStorage],
  preloadedState,
});

export default store;


