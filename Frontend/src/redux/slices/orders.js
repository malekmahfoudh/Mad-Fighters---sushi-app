import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        order:[],
    },
    reducers: {
        addProductToCart: (state, action) => {
            state.order.push(action.payload); 
        },
    },

});

export const { addProductToCart } = orderSlice.actions;
export default orderSlice.reducer;