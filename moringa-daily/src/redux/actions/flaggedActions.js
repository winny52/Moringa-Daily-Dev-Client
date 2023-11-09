import { addToFlagged, removeFromFlagged } from "../slices/flaggedSlices";

// ADD TO FLAGGED
export const addItemToFlagged = (id) => async (dispatch, getState) => {
  const {
    article: { articles },
    flagged: { flaggedArticles },
  } = getState();

  const existingItem = flaggedArticles?.find((item) => item.content_id === id);

  if (!existingItem) {
    const item_to_be_added = articles.find(
      (article) => article.content_id === id
    );
    dispatch(addToFlagged(item_to_be_added));
  }
};

// REMOVE FROM FLAGGED
export const removeItemFromFlagged= (id) => async (dispatch, getState) => {
  const {
    flagged: { flaggedArticles },
  } = getState();

  const filtered_items = flaggedArticles?.filter(
    (item) => item.content_id !== id
  );
  dispatch(removeFromFlagged(filtered_items));
};