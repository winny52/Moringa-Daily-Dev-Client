import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    success_upgrade: false,
    users: [],
    userInfo: {},
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.userInfo = {};
    },
    registerStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    upgradeUserStart: (state) => {
      state.loading = true;
      state.error = false;
      state.success_upgrade = false;
    },
    upgradeUserSuccess: (state) => {
      state.loading = false;
      state.success_upgrade = true;
    },
    upgradeUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getUsersStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFail,
  logoutUser,
  registerStart,
  registerSuccess,
  registerFail,
  upgradeUserStart,
  upgradeUserSuccess,
  upgradeUserFail,
  getUsersStart,
  getUsersSuccess,
  getUsersFail,
} = userSlice.actions;
export default userSlice.reducer;
