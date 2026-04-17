import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import cartSlice from "./cartSlice";
import cartItemSlice from "./cartItemSlice";
import authSlice from "./authSlice";

const myntraCloneStore = configureStore({
    reducer : {
        items : itemSlice.reducer,
        cart : cartSlice.reducer,
        cartItem : cartItemSlice.reducer,
        auth : authSlice.reducer
    }
});
export default myntraCloneStore;