import { createSlice } from "@reduxjs/toolkit";

const localStorageWishlist = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

const initialState = {
  wishlistItems: localStorageWishlist,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlistItems = [...state.wishlistItems, action.payload];

      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = action.payload;

      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
