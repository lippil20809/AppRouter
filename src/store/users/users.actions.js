import * as apiUsers from '../../api/users'

export const SET_USERS_REQUEST_STATUS_PENDING =
  "SET_USERS_REQUEST_STATUS_PENDING";

export const SET_USERS_REQUEST_STATUS_FAILURE =
  "SET_USERS_REQUEST_STATUS_FAILURE";

export const SET_USERS = "SET_USERS";


export const setUsersRequestStatusPending = () => ({
  type: SET_USERS_REQUEST_STATUS_PENDING,
});

export const setUsersRequestSuccess = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const setUsersRequestStatusFailure = () => ({
  type: SET_USERS_REQUEST_STATUS_FAILURE,
});

export const getUsers = () => {
  return (dispatch) => {
    dispatch(setUsersRequestStatusPending());

    apiUsers
      .getUsers()
      .then((users) => dispatch(setUsersRequestSuccess(users)))
      .catch(() => dispatch(setUsersRequestStatusFailure()));
  };
};

export const SET_USER_REQUEST_STATUS_PENDING =
  "SET_USER_REQUEST_STATUS_PENDING";

export const SET_USER_REQUEST_STATUS_FAILURE =
  "SET_USER_REQUEST_STATUS_FAILURE";

export const SET_USER = "SET_USER";


export const setUserRequestStatusPending = () => ({
  type: SET_USER_REQUEST_STATUS_PENDING,
});

export const setUserRequestSuccess = (users) => ({
  type: SET_USER,
  payload: users,
});

export const setUserRequestStatusFailure = () => ({
  type: SET_USER_REQUEST_STATUS_FAILURE,
});

export const getUser = (id) => {
  return (dispatch) => {
    dispatch(setUserRequestStatusPending());

    apiUsers
      .getUser(id)
      .then((users) => dispatch(setUserRequestSuccess(users)))
      .catch(() => dispatch(setUserRequestStatusFailure()));
  };
};