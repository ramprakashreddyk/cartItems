import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/Cartslice";
import modalReducer from "./slice/ModalSlice"
export const store=configureStore({
    reducer:{
        cart:cartReducer,
        modal:modalReducer
    }
})



