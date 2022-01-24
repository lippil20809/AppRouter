import * as Statuses from '../statuses';
import {
    SET_PHOTO,
    SET_PHOTO_REQUEST_STATUS_FAILURE,
    SET_PHOTO_REQUEST_STATUS_PENDING,
    SET_PHOTOS,
    SET_PHOTOS_REQUEST_STATUS_FAILURE,
    SET_PHOTOS_REQUEST_STATUS_PENDING
} from './photos.actions'

export const initialState = {
    photosRequestStatus: Statuses.UNCALLED,
    photoRequestStatus: Statuses.UNCALLED,
    photos: [],
    photo: null,
  };
  
  export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PHOTOS_REQUEST_STATUS_PENDING:
        return { ...state, photosRequestStatus: Statuses.PENDING };
      case SET_PHOTOS:
        return {
          ...state,
          photos: action.payload,
          photosRequestStatus: Statuses.SUCCESS,
        };
      case SET_PHOTOS_REQUEST_STATUS_FAILURE:
        return { ...state, photosRequestStatus: Statuses.FAILURE };
      case SET_PHOTO:
        return {
          ...state,
          photo: action.payload,
          photoRequestStatus: Statuses.SUCCESS,
        };
      case SET_PHOTO_REQUEST_STATUS_PENDING:
        return {
          ...state,
          photoRequestStatus: Statuses.PENDING,
        };
      case SET_PHOTO_REQUEST_STATUS_FAILURE:
        return {
          ...state,
          photoRequestStatus: Statuses.FAILURE,
        };
      default:
        return state;
    }
  };