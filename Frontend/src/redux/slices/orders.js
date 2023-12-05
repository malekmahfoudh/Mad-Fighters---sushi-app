import { createSlice } from '@reduxjs/toolkit'

const ordersSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart:[],
    },
    reducers: {
        addProductToCart: (state, action) => {
            state.cart.push(action.payload); 
        },
    },

});

export const { addProductToCart } = ordersSlice.actions;
export default ordersSlice.reducer;