export const actionTypes = {
  addToFavorites: "ADD_TO_FAVORITES",
  removeFromFavorites: "REMOVE_FROM_FAVORITES",
};

export function addToFavorites(newsDetails) {
  return {
    type: actionTypes.addToFavorites,
    payload: newsDetails,
  };
}

export function removeFromFavorites(newsId) {
  return {
    type: actionTypes.removeFromFavorites,
    payload: newsId,
  };
}
