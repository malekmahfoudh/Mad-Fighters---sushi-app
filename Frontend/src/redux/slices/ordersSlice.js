import { createSlice } from '@reduxjs/toolkit'

const ordersSlice = createSlice({
  name: 'orders',
  initialState:{
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.orders.push(...action.payload)
    },
  }
});


export const { addProducts } = ordersSlice.actions
export default ordersSlice.reducer
