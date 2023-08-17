import { createSlice } from "@reduxjs/toolkit"
import cartItems from "../Cartitems"
const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((each) => each.id !== itemId)
        },
        increase: (state, action) => {
            const itemId = action.payload
            const cartItem = state.cartItems.find((each) => each.id === itemId)
            if (cartItem !== undefined) {
                cartItem.amount += 1
            }
        },
        decrease: (state, action) => {
            const itemId = action.payload
            const cartItem = state.cartItems.find((each) => each.id === itemId)
            if (cartItem !== undefined) {
                cartItem.amount -= 1
            }
        },
        calculateTotal: (state: any) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item: any) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;

        }
    }
})
export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions

export default cartSlice.reducer