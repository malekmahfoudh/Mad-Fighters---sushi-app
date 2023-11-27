// store.js
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice.js';

const store = configureStore({
    reducer: productsSlice,
});

export default store;