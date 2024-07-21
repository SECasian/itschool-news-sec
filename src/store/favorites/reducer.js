import { actionTypes } from "./actions";

export const initialState = {
  news: [],
};

export function favoritesReducer(state, action) {
  switch (action.type) {
    case actionTypes.addToFavorites: {
      let updatedNewsList;
      let newState;
      const foundNews = state.news.find((news) => {
        return news.id === action.payload.id;
      });
      if (foundNews) {
        return state;
      } else {
        updatedNewsList = [...state.news, action.payload];
      }
      newState = {
        news: updatedNewsList,
      };
      return newState;
    }
    case actionTypes.removeFromFavorites: {
      const filteredNews = state.news.filter((news) => {
        return news.id !== action.payload;
      });
      const newState = {
        news: filteredNews,
      };
      return newState;
    }
    default:
      return state;
  }
}
