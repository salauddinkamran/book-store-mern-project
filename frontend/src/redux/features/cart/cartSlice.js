import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id,
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product Added to the Cart",
          showConfirmButton: false,
          timer: 1500,
        });
        // alert("Item added successfully!");
      } else {
        // alert("Item already exists")
        Swal.fire({
          title: "Already Added to the Cart",
          text: "That thing is still around?",
          icon: "question",
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id,
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});
// export the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
