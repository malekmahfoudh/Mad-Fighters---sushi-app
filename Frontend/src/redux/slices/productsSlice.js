import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState:{
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      if (state.products.length > 0) state.products = []
      state.products.push(...action.payload)
    }
  },
})


export const { addProducts } = productsSlice.actions
export default productsSlice.reducer
