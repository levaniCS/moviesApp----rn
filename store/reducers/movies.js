import {
  SET_MOVIES,
  TOGGLE_FAVOURITE,
  CLEAR_FAVOURITES
} from '../actions/movies';

const initialState = {
  movies: [],
  favouriteMovies: []
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.movies };
    case TOGGLE_FAVOURITE:
      const existingMovie = state.favouriteMovies.findIndex(
        (movie) => movie.id === action.movieId
      );
      if (existingMovie >= 0) {
        // ფავორიტებში უკვე დამატებული
        const updatedMovies = [...state.favouriteMovies];
        updatedMovies.splice(existingMovie, 1);
        return { ...state, favouriteMovies: updatedMovies };
      } else {
        const movie = state.movies.find((movie) => movie.id === action.movieId);
        return {
          ...state,
          favouriteMovies: state.favouriteMovies.concat(movie)
        };
      }
    case CLEAR_FAVOURITES:
      return { ...state, favouriteMovies: [] };
  }
  return state;
};

export default moviesReducer;
