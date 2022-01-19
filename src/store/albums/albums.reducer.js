import * as Statuses from '../statuses';
import {
    SET_ALBUM,
    SET_ALBUM_REQUEST_STATUS_FAILURE,
    SET_ALBUM_REQUEST_STATUS_PENDING,
    SET_ALBUMS,
    SET_ALBUMS_REQUEST_STATUS_FAILURE,
    SET_ALBUMS_REQUEST_STATUS_PENDING
} from './albums.actions'

const initialState = {
    albumsRequestStatus: Statuses.UNCALLED,
    albumRequestStatus: Statuses.UNCALLED,
    albums: [],
    album: null,
  };
  
  export const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ALBUMS_REQUEST_STATUS_PENDING:
        return { ...state, albumsRequestStatus: Statuses.PENDING };
      case SET_ALBUMS:
        return {
          ...state,
          albums: action.payload,
          albumsRequestStatus: Statuses.SUCCESS,
        };
      case SET_ALBUMS_REQUEST_STATUS_FAILURE:
        return { ...state, albumsRequestStatus: Statuses.FAILURE };
      case SET_ALBUM:
        return {
          ...state,
          album: action.payload,
          albumRequestStatus: Statuses.SUCCESS,
        };
      case SET_ALBUM_REQUEST_STATUS_PENDING:
        return {
          ...state,
          albumRequestStatus: Statuses.PENDING,
        };
      case SET_ALBUM_REQUEST_STATUS_FAILURE:
        return {
          ...state,
          albumRequestStatus: Statuses.FAILURE,
        };
      default:
        return state;
    }
  };