const initialState = {
  listTodo: [],
  todoDetails: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case '':
      return {...state, ...action};

    default:
      return state;
  }
};
