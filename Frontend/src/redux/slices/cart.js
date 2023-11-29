
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart:[],
    },
    reducers: {
        addProductToCart: (state, action) => {
            //push the product to the cart array
            state.cart.push(action.payload); 
        },
        removeProductFromCart: (state, action) => {
            //filter out the product that matches the id of the product to be removed
           state.cart = state.cart.filter(product => product.id !== action.payload.id)
        },
        clearCart: (state, action) => {
            //set the cart array to an empty array
            state.cart = []
        },
    },

});

export const { addProductToCart, removeProductFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;