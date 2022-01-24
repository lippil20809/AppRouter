import * as Statuses from '../statuses';
import {
  SET_TODO,
  SET_TODOS_REQUEST_STATUS_FAILURE,
  SET_TODOS_REQUEST_STATUS_PENDING,
  SET_TODOS,
  SET_TODO_REQUEST_STATUS_FAILURE,
  SET_TODO_REQUEST_STATUS_PENDING,
} from './todos.actions';

export const initialState = {
  todosRequestStatus: Statuses.UNCALLED,
  todoRequestStatus: Statuses.UNCALLED,
  todos: [],
  todo: null,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS_REQUEST_STATUS_PENDING:
      return { ...state, todosRequestStatus: Statuses.PENDING };
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
        todosRequestStatus: Statuses.SUCCESS,
      };
    case SET_TODOS_REQUEST_STATUS_FAILURE:
      return { ...state, todosRequestStatus: Statuses.FAILURE };
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
        todoRequestStatus: Statuses.SUCCESS,
      };
    case SET_TODO_REQUEST_STATUS_PENDING:
      return {
        ...state,
        todoRequestStatus: Statuses.PENDING,
      };
    case SET_TODO_REQUEST_STATUS_FAILURE:
      return {
        ...state,
        todoRequestStatus: Statuses.FAILURE,
      };
    default:
      return state;
  }
};
