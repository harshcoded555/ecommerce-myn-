import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
      
      // Save to localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    loginFailure(state, action) {
      state.error = action.payload;
      state.token = null;
      state.user = null;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      state.error = null;
      
      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
