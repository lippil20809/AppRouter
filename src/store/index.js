import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { postsReducer } from './posts';
import { todosReducer } from './todos';
import { usersReducer } from './users';
import { albumsReducer } from './albums';
import { photosReducer } from './photos';

const logger = store => next => action => {
  console.log(action);
  return next(action);
};

const reducers = combineReducers({
  posts: postsReducer,
  todos: todosReducer,
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
});
const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
