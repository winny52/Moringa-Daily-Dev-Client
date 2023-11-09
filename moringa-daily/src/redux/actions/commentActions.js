import {
  addCommentStart,
  addCommentSuccess,
  addCommentFail,
  listCommentsStart,
  listCommentsSuccess,
  listCommentsFail,
  rateArticleSuccess,
  getRatingSuccess,
} from "../slices/commentSlice";
import axios from "axios";
import { BASE_URL } from "../../URL";

//  CREATE COMMENT
export const createComment = (comment) => async (dispatch) => {
  try {
    dispatch(addCommentStart());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${BASE_URL}/comments`, comment, config);
    dispatch(addCommentSuccess(data));
  } catch (err) {
    dispatch(addCommentFail("Error sending comment"));
  }
};

// LIST COMMENTS
export const listComments = (contentId) => async (dispatch) => {
  try {
    dispatch(listCommentsStart());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${BASE_URL}/comments/${contentId}`,
      config
    );
    dispatch(listCommentsSuccess(data));
  } catch (err) {
    dispatch(listCommentsFail("Error fetching comments"));
  }
};

//  RATE ARTICLE
export const rateArticle = (ratingInfo) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post(`${BASE_URL}/ratings`, ratingInfo, config);
    dispatch(rateArticleSuccess());
  } catch (err) {
    console.log("Error creating article rating...");
  }
};

//  GET AVERAGE RATING
export const getAverageRating = (contentId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${BASE_URL}/content/${contentId}/average-rating`,
      config
    );
    dispatch(getRatingSuccess(data));
  } catch (err) {
    console.log("Error getting article ratings");
  }
};
