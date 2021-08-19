import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import MovieReducer from './reducers/MovieReducer';
import TodoReducer from './reducers/TodoReducer';

const allReducers = combineReducers({
  TodoReducer,
  MovieReducer,
});

export const appDemoStore = createStore(allReducers, applyMiddleware(thunk));
