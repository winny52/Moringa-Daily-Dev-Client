import {
  addCategoryStart,
  addCategorySuccess,
  addCategoryFail,
  listCategoriesStart,
  listCategoriesSuccess,
  listCategoriesFail,
} from "../slices/categorySlices";
import axios from "axios";
import { BASE_URL } from "../../URL";

//  CREATE CATEGORY
export const createCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: addCategoryStart });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${BASE_URL}/admin/create-category`,
      category,
      config
    );
    dispatch({ type: addCategorySuccess, payload: data });
  } catch (err) {
    dispatch({ type: addCategoryFail, payload: "Error creating category" });
  }
};

// LIST CATEGORIES
export const listCategories = () => async (dispatch) => {
  try {
    dispatch(listCategoriesStart());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${BASE_URL}/view-categories`, config);
    dispatch(listCategoriesSuccess(data));
  } catch (err) {
    dispatch(listCategoriesFail("Error listing categories"));
  }
};
