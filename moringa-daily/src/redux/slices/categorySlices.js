import { createSlice } from "@reduxjs/toolkit";

const localStorageCat = localStorage.getItem("cat")
  ? JSON.parse(localStorage.getItem("cat"))
  : {};

const initialState = {
  loading: false,
  error: null,
  categories: [],
  success_create: false,
  userCategories: localStorageCat,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addUserCategory: (state, action) => {
      const { name, value } = action.payload;
      state.userCategories = {
        ...state.userCategories,
        [name]: value,
      };

      localStorage.setItem("cat", JSON.stringify(state.userCategories));
    },
    addCategoryStart: (state) => {
      state.loading = true;
      state.success_create = false;
    },
    addCategorySuccess: (state, action) => {
      state.loading = false;
      state.success_create = true;
    },
    addCategoryFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    listCategoriesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    listCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    listCategoriesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addUserCategory,
  addCategoryStart,
  addCategorySuccess,
  addCategoryFail,
  listCategoriesFail,
  listCategoriesStart,
  listCategoriesSuccess,
} = categorySlice.actions;

export default categorySlice.reducer;
