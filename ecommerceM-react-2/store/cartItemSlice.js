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
    toggleItemSelected: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.selected = !item.selected;
      }
    },
    selectAllItems: (state) => {
      state.forEach((item) => {
        item.selected = true;
      });
    },
    deselectAllItems: (state) => {
      state.forEach((item) => {
        item.selected = false;
      });
    },
    setSelectedSize: (state,action) => {
      const sizeItem = state.find((item)=> item.id === action.payload.id)
      if(sizeItem){
        sizeItem.size = action.payload.finalSelectedSize
      }
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
