import { createSlice } from '@reduxjs/toolkit'

const orderUpdate = createSlice({
    name: 'orderUpdate',
    initialState: {
        cart:[],
    },
    reducers: {
        addToCart_update: (state, action) => {
            //push the product to the cart array
            state.cart.push(action.payload); 
        },

        addProductToCart_update: (state, action) => {
            const existingProductIndex = state.cart.findIndex(
                item => item.product.id === action.payload.product.id
            );

            if (existingProductIndex >= 0) {
                state.cart[existingProductIndex].quantity += action.payload.quantity;
            } else {
                state.cart.push(action.payload);
            }
        },
        removeProductFromCart_update: (state, action) => {
            //filter out the product that matches the id of the product to be removed
        //    state.cart = state.cart.filter(product => product.id !== action.payload.id)
        state.cart = state.cart.filter(product => product.product.id !== action.payload.id)

        },
        clearCart_update: (state, action) => {
            //set the cart array to an empty array
            state.cart = []
        },
        updateQuantityInCart_update: (state, action) => {
            const existingProductIndex = state.cart.findIndex(
              item => item.product.id === action.payload.product.id
            );
          
            if (existingProductIndex >= 0) {
              state.cart[existingProductIndex].quantity = action.payload.quantity;
            }
          },
    },

});

export const { addToCart_update, addProductToCart_update, removeProductFromCart_update, clearCart_update, updateQuantityInCart_update } = orderUpdate.actions; 
export default orderUpdate.reducer;