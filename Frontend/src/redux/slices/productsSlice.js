import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState:{
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.products.push(...action.payload)
    }
  },
})


export const { addProducts } = productsSlice.actions
export default productsSlice.reducer


//import { createSlice } from '@reduxjs/toolkit'

// slice = {
//   name,
//   initialState,
//   reducer {
//     action:(state, action) => {}
// }

//export const { action } = slice.actions
//export default slice.reducer 