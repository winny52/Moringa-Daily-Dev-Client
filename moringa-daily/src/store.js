import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import messageReducer from "./slices/messages";
import wishListReducer from "./redux/slices/wishlistSlices"
import categoryReducer from "./redux/slices/categorySlices"
import articleReducer from "./redux/slices/articleSlices"
import commentReducer from "./redux/slices/commentSlice"
import flaggedReducer from "./redux/slices/flaggedSlices"
import userReducer  from "./redux/slices/userSlices"


const rootReducer = combineReducers({
    auth: authReducer,
    message: messageReducer,
    wishlist:wishListReducer,
    category:categoryReducer,
    article:articleReducer,
    comment:commentReducer,
    flagged: flaggedReducer,
    user: userReducer,

})
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
