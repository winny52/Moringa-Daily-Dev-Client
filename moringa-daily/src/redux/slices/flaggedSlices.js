import { createSlice } from "@reduxjs/toolkit";

const localStorageFlagged = localStorage.getItem("flagged")
  ? JSON.parse(localStorage.getItem("flagged"))
  : [];

const initialState = {
  flaggedArticles: localStorageFlagged,
};

export const flaggedSlice = createSlice({
  name: "flagged",
  initialState,
  reducers: {
    addToFlagged: (state, action) => {
      state.flaggedArticles = [...state.flaggedArticles, action.payload];

      localStorage.setItem("flagged", JSON.stringify(state.flaggedArticles));
    },
    removeFromFlagged: (state, action) => {
      state.flaggedArticles = action.payload;

      localStorage.setItem("flagged", JSON.stringify(state.flaggedArticles));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFlagged, removeFromFlagged } = flaggedSlice.actions;

export default flaggedSlice.reducer;