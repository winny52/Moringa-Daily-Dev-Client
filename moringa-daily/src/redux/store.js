import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlices";
import articleReducer from "./slices/articleSlices";
import commentReducer from "./slices/commentSlice";
import wishlistReducer from "./slices/wishlistSlices";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    article: articleReducer,
    comment: commentReducer,
    wishlist: wishlistReducer,
  },
});
