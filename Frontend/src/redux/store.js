// store.js
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice.js';
import cartSlice from './slices/cart.js';
import orderUpdate from './slices/orderUpdate.js';


const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        orderUpdate:orderUpdate,
    },
});

export default store;