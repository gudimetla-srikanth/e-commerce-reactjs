import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'dataslicer',
  initialState: {
    cart: [],
    total: 0,
    cartQt: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const newId = state.cart.findIndex((data) => {
        if (data.id === action.payload.id) {
          return data;
        }
      })
      if (newId !== -1) {
        state.total = state.total - state.cart[newId].newPrice;
        state.cart[newId].qt = state.cart[newId].qt + action.payload.qt
        state.cart[newId].newPrice = state.cart[newId].newPrice + action.payload.newPrice;
        state.total = state.total + state.cart[newId].newPrice;
      } else {
        state.cart = [...state.cart, action.payload]
        state.cartQt = state.cartQt + 1;
        state.total = state.total + action.payload.newPrice;
      }

    },
    filterCart: (state, action) => {
      state.cart = state.cart.filter((data) => {
        if (data.id !== action.payload.id) {
          return data;
        } else {
          state.total = state.total - (data.newPrice);
          state.cartQt = state.cartQt - 1;
        }
      })
    },
  }
})


export const { addToCart, filterCart } = dataSlice.actions

export default dataSlice.reducer