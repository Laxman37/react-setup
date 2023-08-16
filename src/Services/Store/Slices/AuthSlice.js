import { createSlice } from "@reduxjs/toolkit";

const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

const authSlice = createSlice({
  name: "AuthLogin",
  initialState: {
    user: initialUser,
    isloggedIn: Boolean(Object.keys(initialUser).length),
    status: "Idle",
  },
  reducers: {
    LogIn: (state, action) => {
      state.user = action.payload;
      state.isloggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    LogOut: (state, action) => {
      state.user = {};
      state.isloggedIn = false;
      localStorage.removeItem("user");
    },
  },
  extraReducers: {},
});

export default authSlice.reducer;

export const { LogOut, LogIn } = authSlice.actions;