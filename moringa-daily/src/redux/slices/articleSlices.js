import { createSlice } from "@reduxjs/toolkit";

const localStorageControls = localStorage.getItem("controls")
  ? JSON.parse(localStorage.getItem("controls"))
  : {};

const initialState = {
  loading: false,
  error: null,
  articles: [],
  success_create: false,
  success_remove: false,
  controls: localStorageControls,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addArticleControls: (state, action) => {
      const { name, value } = action.payload;
      state.controls = {
        ...state.controls,
        [name]: value,
      };

      localStorage.setItem("controls", JSON.stringify(state.controls));
    },
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
    removeArticleStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    removeArticleSuccess: (state, action) => {
      state.loading = false;
      state.success_remove = true;
    },
    removeArticleFail: (state, action) => {
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
  addArticleControls,
  removeArticleStart,
  removeArticleSuccess,
  removeArticleFail,
} = articleSlice.actions;

export default articleSlice.reducer;
