import * as Statuses from '../statuses'
import {
    SET_POSTS,
    SET_POSTS_REQUEST_STATUS_FAILURE,
    SET_POSTS_REQUEST_STATUS_PENDING,
    SET_POST,
    SET_POST_REQUEST_STATUS_PENDING,
    SET_POST_REQUEST_STATUS_FAILURE,
    SET_POST_COMMENTS,
    SET_POST_COMMENTS_REQUEST_STATUS_FAILURE,
    SET_POST_COMMENTS_REQUEST_STATUS_PENDING
  } from "./posts.actions";
  
  const initialState = {
    postsRequestStatus: Statuses.UNCALLED,
    postRequestStatus: Statuses.UNCALLED,
    commentsRequestStatus: Statuses.UNCALLED,
    posts: [],
    post: null,
    comments: []
    
  };
  
  export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_POSTS_REQUEST_STATUS_PENDING:
        return { ...state, postsRequestStatus: Statuses.PENDING };
      case SET_POSTS:
        return {
          ...state,
          posts: action.payload,
          postsRequestStatus: Statuses.SUCCESS,
        };
      case SET_POSTS_REQUEST_STATUS_FAILURE:
        return { ...state, postsRequestStatus: Statuses.FAILURE };
      case SET_POST:
        return {
          ...state,
          post: action.payload,
          postRequestStatus: Statuses.SUCCESS,
        };
      case SET_POST_REQUEST_STATUS_PENDING:
        return {
          ...state,
          postRequestStatus: Statuses.PENDING,
        };
      case SET_POST_REQUEST_STATUS_FAILURE:
        return {
          ...state,
          postRequestStatus: Statuses.FAILURE,
        };
        case SET_POST_COMMENTS:
        return {
          ...state,
          comments: action.payload,
          commentsRequestStatus: Statuses.SUCCESS,
        };
      case SET_POST_COMMENTS_REQUEST_STATUS_PENDING:
        return {
          ...state,
          commentsRequestStatus: Statuses.PENDING,
        };
      case SET_POST_COMMENTS_REQUEST_STATUS_FAILURE:
        return {
          ...state,
          commentsRequestStatus: Statuses.FAILURE,
        };
      default:
        return state;
    }
  };
  