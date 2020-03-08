export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
export const SET_MOVIES = 'SET_MOVIES';
export const CLEAR_FAVOURITES = 'CLEAR_FAVOURITES';

export const setMoviesInArr = (movies) => {
  return {
    type: SET_MOVIES,
    movies
  };
};

export const clearFavourites = () => {
  return {
    type: CLEAR_FAVOURITES
  };
};

export const toggleFavourite = (id) => {
  return {
    type: TOGGLE_FAVOURITE,
    movieId: id
  };
};
