import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: {
      order: null,
      allOrders: null,
      isFetching: false,
      error: false
    }
  },
  reducers: {
    getOrdersStart: (state) => {
      state.orders.isFetching = true;
    },
    getOrdersSuccess: (state, action) => {
      state.orders.isFetching = false;
      state.orders.order = action.payload;
    },
    getOrdersFailed: (state) => {
      state.orders.isFetching = false;
      state.orders.error = true;
    },
    getAllOrdersSuccess: (state, action) => {
      state.orders.isFetching = false;
      state.orders.allOrders = action.payload;
    }
  }
})

export const {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailed,
  getAllOrdersSuccess,
} = orderSlice.actions;

export default orderSlice.reducer;