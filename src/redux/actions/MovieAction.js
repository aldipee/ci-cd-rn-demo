import axios from 'axios';

export const GET_MOVIE_LIST_START = '@@MOVIE/GET_MOVIE_LIST_START';
export const GET_MOVIE_LIST_SUCCESS = '@@MOVIE/GET_MOVIE_LIST_SUCCESS';
export const GET_MOVIE_LIST_FAILED = '@@MOVIE/GET_MOVIE_LIST_FAILED';

export const getMovieList = () => async dispatch => {
  try {
    dispatch({
      type: GET_MOVIE_LIST_START,
    });
    const dataMovie = await axios.get('http://code.aldipee.com/api/v1/movies');
    dispatch({
      type: GET_MOVIE_LIST_SUCCESS,
      dataListMovie: dataMovie.data.results,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIE_LIST_FAILED,
    });
  }
};
