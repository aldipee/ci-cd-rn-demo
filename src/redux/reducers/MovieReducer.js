import {
  GET_MOVIE_LIST_START,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAILED,
} from './../actions/MovieAction';
const initialState = {
  listMovies: [],
  movieDetail: {},
  titlePage: 'Movie Page',
  isLoading: false,
};

export default (state = initialState, action) => {
  console.log(action, 'Ini action yang kepanggil');
  switch (action.type) {
    case GET_MOVIE_LIST_START:
      return {...state, isLoading: true};
    case GET_MOVIE_LIST_FAILED:
      return {...state, isLoading: false};
    case GET_MOVIE_LIST_SUCCESS:
      return {...state, isLoading: false, listMovies: action.dataListMovie};
    default:
      return state;
  }
};
