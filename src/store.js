import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // Create this file

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
