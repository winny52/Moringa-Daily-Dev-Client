import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  comments: [],
  success_create: false,
  success_rating: false,
  rating: 0,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addCommentStart: (state) => {
      state.loading = true;
      state.success_create = false;
    },
    addCommentSuccess: (state, action) => {
      state.loading = false;
      state.success_create = true;
    },
    addCommentFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    listCommentsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    listCommentsSuccess: (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    },
    listCommentsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    rateArticleSuccess: (state) => {
      state.success_rating = true;
    },
    getRatingSuccess: (state, action) => {
      state.rating = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCommentStart,
  addCommentSuccess,
  addCommentFail,
  listCommentsStart,
  listCommentsSuccess,
  listCommentsFail,
  rateArticleSuccess,
  getRatingSuccess,
} = commentSlice.actions;

export default commentSlice.reducer;
