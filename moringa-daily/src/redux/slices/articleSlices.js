import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  articles: [],
  success_create: false,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    createArticleStart: (state) => {
      state.loading = true;
      state.success_create = false;
    },
    createArticleSuccess: (state, action) => {
      state.loading = false;
      state.success_create = true;
    },
    createArticleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    listArticlesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    listArticlesSuccess: (state, action) => {
      state.loading = false;
      state.articles = action.payload;
    },
    listArticlesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createArticleStart,
  createArticleSuccess,
  createArticleFail,
  listArticlesStart,
  listArticlesSuccess,
  listArticlesFail,
} = articleSlice.actions;

export default articleSlice.reducer;
