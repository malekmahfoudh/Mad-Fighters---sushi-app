// store.js
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice.js';
import cartSlice from './slices/cart.js';

const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,    
    },
});

export default store;