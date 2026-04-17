import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addCart : (state,action) => {
            state.push(action.payload);
        },
        removeCart : (state,action) => {
            return state.filter(id => id!==action.payload);
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;