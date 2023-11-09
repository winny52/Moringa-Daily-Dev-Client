import {
  createArticleStart,
  createArticleSuccess,
  createArticleFail,
  listArticlesStart,
  listArticlesSuccess,
  listArticlesFail,
  removeArticleStart,
  removeArticleSuccess,
  removeArticleFail,
} from "../slices/articleSlices";
import axios from "axios";
import { BASE_URL } from "../../URL";

//  CREATE CATEGORY
export const createArticle = (article) => async (dispatch) => {
  try {
    dispatch(createArticleStart());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${BASE_URL}/content`, article, config);
    dispatch(createArticleSuccess(data));
  } catch (err) {
    dispatch(createArticleFail("Error creating article"));
  }
};

// LIST CATEGORIES
export const listArticles = () => async (dispatch, getState) => {
  try {
    dispatch(listArticlesStart());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${BASE_URL}/content`, config);
    console.log(data);
//     const {
//       category: { userCategories },
//     } = getState();
//     const keys = Object.keys(userCategories);
//     let categories = [];
//     for (const key of keys) {
//       if (userCategories[key]) {
//         categories.push(key);
//       }
//     }
// console.log(categories);
//     const filteredArticles = data.filter((item) => {
//       // Convert content_id to a string and check if it's included in categories
//       return categories.includes(item.category_id.toString());
//     });
// console.log(filteredArticles);

    dispatch(listArticlesSuccess(data));
  } catch (err) {
    dispatch(listArticlesFail("Error listing articles"));
  }
};

// ADMIN REMOVE ARTICLE
export const removeArticle = (contentId) => async (dispatch) => {
  try {
    dispatch(removeArticleStart());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${BASE_URL}/content/delete-approved/${contentId}`,
      config
    );
    dispatch(removeArticleSuccess(data));
  } catch (err) {
    dispatch(removeArticleFail("Error deleting article"));
  }
};
