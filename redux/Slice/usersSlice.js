import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {
      alluser: null,
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
      state.users.alluser = action.payload;
    },
    getUsersFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    }
  }
})

export const { 
  getUsersFailed,
  getUsersStart, 
  getUsersSuccess
} = usersSlice.actions

export default usersSlice.reducer