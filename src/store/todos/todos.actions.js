import * as apiTodos from '../../api/todos'

export const SET_TODOS_REQUEST_STATUS_PENDING =
  "SET_TODOS_REQUEST_STATUS_PENDING";

export const SET_TODOS_REQUEST_STATUS_FAILURE =
  "SET_TODOS_REQUEST_STATUS_FAILURE";

export const SET_TODOS = "SET_TODOS";


export const setTodosRequestStatusPending = () => ({
  type: SET_TODOS_REQUEST_STATUS_PENDING,
});

export const setTodosRequestSuccess = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

export const setTodosRequestStatusFailure = () => ({
  type: SET_TODOS_REQUEST_STATUS_FAILURE,
});

export const getTodos = () => {
  return (dispatch) => {
    dispatch(setTodosRequestStatusPending());

    apiTodos
      .getTodos()
      .then((todos) => dispatch(setTodosRequestSuccess(todos)))
      .catch(() => dispatch(setTodosRequestStatusFailure()));
  };
};

export const SET_TODO_REQUEST_STATUS_PENDING =
  "SET_TODO_REQUEST_STATUS_PENDING";

export const SET_TODO_REQUEST_STATUS_FAILURE =
  "SET_TODO_REQUEST_STATUS_FAILURE";

export const SET_TODO = "SET_TODO";


export const setTodoRequestStatusPending = () => ({
  type: SET_TODO_REQUEST_STATUS_PENDING,
});

export const setTodoRequestSuccess = (todos) => ({
  type: SET_TODO,
  payload: todos,
});

export const setTodoRequestStatusFailure = () => ({
  type: SET_TODO_REQUEST_STATUS_FAILURE,
});

export const getTodo = (id) => {
  return (dispatch) => {
    dispatch(setTodoRequestStatusPending());

    apiTodos
      .getTodo(id)
      .then((todos) => dispatch(setTodoRequestSuccess(todos)))
      .catch(() => dispatch(setTodoRequestStatusFailure()));
  };
};

