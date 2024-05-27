import { createSlice } from '@reduxjs/toolkit'

const intialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  intialState,
})

// console.log(cartSlice)

export default cartSlice.reducer
