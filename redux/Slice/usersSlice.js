import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {
      allusers: null,
      userbyId: null,
      isFetching: false,
      error: false
    }
  },
  reducers: {
    getUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.allusers = action.payload;
    },
    getUsersFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
    updateSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.error = false;
      state.users.allusers = action.payload;
    },
    getUserByIdSuccess: (state, action) => {
      state.users.userbyId = action.payload;
    }
  }
})

export const { 
  getUsersFailed,
  getUsersStart, 
  getUsersSuccess,
  updateSuccess,
  getUserByIdSuccess
} = usersSlice.actions

export default usersSlice.reducer