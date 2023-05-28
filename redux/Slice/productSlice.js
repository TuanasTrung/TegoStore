import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: {
      product: null,
      isFetching: false,
      error: false
    }
  },
  reducers: {
    getProductStart: (state) => {
      state.product.isFetching = true;
    },
    getProductSuccess: (state, action) => {
      state.product.isFetching = false;
      state.product.product = action.payload;
    },
    getProductFailed: (state) => {
      state.product.isFetching = false;
      state.product.error = true;
    }
  }
})

export const {
  getProductFailed,
  getProductSuccess,
  getProductStart
} = productSlice.actions;

export default productSlice.reducer;