import { addToWishlist, removeFromWishlist } from "../slices/wishlistSlices";

// ADD TO WISHLIST
export const addItemToWishList = (id) => async (dispatch, getState) => {
  const {
    article: { articles },
    wishlist: { wishlistItems },
  } = getState();

  const existingItem = wishlistItems?.find((item) => item.content_id === id);

  if (!existingItem) {
    const item_to_be_added = articles.find(
      (article) => article.content_id === id
    );
    dispatch(addToWishlist(item_to_be_added));
  }
};

// REMOVE FROM WISHLIST
export const removeItemFromWishlist = (id) => async (dispatch, getState) => {
  const {
    wishlist: { wishlistItems },
  } = getState();

  const filtered_items = wishlistItems?.filter(
    (item) => item.content_id !== id
  );
  dispatch(removeFromWishlist(filtered_items));
};
