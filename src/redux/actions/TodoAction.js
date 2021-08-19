import axios from 'axios';

export const SUBMIT_TODO_ITEM_START = 'SUBMIT_TODO_ITEM_START';
export const SUBMIT_TODO_ITEM_SUCCESS = 'SUBMIT_TODO_ITEM_SUCCESS';
export const SUBMIT_TODO_ITEM_FAILED = 'SUBMIT_TODO_ITEM_FAILED';

export const submitDataTodo = requestBodyTodo => async dispatch => {
  try {
    dispatch({
      type: SUBMIT_TODO_ITEM_START,
    });
    const response = await axios.post(
      'http://code.aldipeee.com/api/v1/todos',
      requestBodyTodo,
    );
    if (response.status === 201) {
      dispatch({
        type: SUBMIT_TODO_ITEM_SUCCESS,
      });
    }
  } catch (error) {
    dispatch({
      type: SUBMIT_TODO_ITEM_FAILED,
    });
  }
};
