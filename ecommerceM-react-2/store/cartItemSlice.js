import { createSlice } from "@reduxjs/toolkit";

let cartItemSlice = createSlice({
  name: "cartitem",
  initialState: [],
  reducers: {
    addToCartItem: (state, action) => {
      //  state.push(action.payload);
      state.push({
        ...action.payload,
        selected: false,
      });
    },
    removeCartItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const cartItemActions = cartItemSlice.actions;
export default cartItemSlice;

// addToCartItem: (state, action) => {
//   state.push({
//     ...action.payload,
//     selected: false
//   });
// },
