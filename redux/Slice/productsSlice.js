import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: {
      allProducts: null,
      isFetching: false,
      error: false
    }
  },
  reducers: {
    getProductsStart: (state) => {
      state.products.isFetching = true;
    },
    getProductsSuccess: (state, action) => {
      state.products.isFetching = false;
      state.products.allProducts = action.payload;
    },
    getProductsFailed: (state) => {
      state.products.isFetching = false;
      state.products.error = true;
    }
  }
})

export const {
  getProductsFailed,
  getProductsSuccess,
  getProductsStart
} = productsSlice.actions;

export default productsSlice.reducer;