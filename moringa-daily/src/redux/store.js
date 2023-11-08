import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlices";
import articleReducer from "./slices/articleSlices";
export const store = configureStore({
  reducer: {
    category: categoryReducer,
    article: articleReducer,
  },
});
