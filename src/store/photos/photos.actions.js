import * as apiPhotos from '../../api/photos'

export const SET_PHOTOS_REQUEST_STATUS_PENDING =
  "SET_PHOTOS_REQUEST_STATUS_PENDING";

export const SET_PHOTOS_REQUEST_STATUS_FAILURE =
  "SET_PHOTOS_REQUEST_STATUS_FAILURE";

export const SET_PHOTOS = "SET_PHOTOS";


export const setPhotosRequestStatusPending = () => ({
  type: SET_PHOTOS_REQUEST_STATUS_PENDING,
});

export const setPhotosRequestSuccess = (photos) => ({
  type: SET_PHOTOS,
  payload: photos,
});

export const setPhotosRequestStatusFailure = () => ({
  type: SET_PHOTOS_REQUEST_STATUS_FAILURE,
});

export const getPhotos = () => {
  return (dispatch) => {
    dispatch(setPhotosRequestStatusPending());

    apiPhotos
      .getPhotos()
      .then((photos) => dispatch(setPhotosRequestSuccess(photos)))
      .catch(() => dispatch(setPhotosRequestStatusFailure()));
  };
};

export const SET_PHOTO_REQUEST_STATUS_PENDING =
  "SET_PHOTO_REQUEST_STATUS_PENDING";

export const SET_PHOTO_REQUEST_STATUS_FAILURE =
  "SET_PHOTO_REQUEST_STATUS_FAILURE";

export const SET_PHOTO = "SET_PHOTO";


export const setPhotoRequestStatusPending = () => ({
  type: SET_PHOTO_REQUEST_STATUS_PENDING,
});

export const setPhotoRequestSuccess = (photos) => ({
  type: SET_PHOTO,
  payload: photos,
});

export const setPhotoRequestStatusFailure = () => ({
  type: SET_PHOTO_REQUEST_STATUS_FAILURE,
});

export const getPhoto = (id) => {
  return (dispatch) => {
    dispatch(setPhotoRequestStatusPending());

    apiPhotos
      .getPhoto(id)
      .then((photos) => dispatch(setPhotoRequestSuccess(photos)))
      .catch(() => dispatch(setPhotoRequestStatusFailure()));
  };
};