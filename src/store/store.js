import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    cart: productReducer,
    // Add more reducers if needed
  },
});

export default store;
