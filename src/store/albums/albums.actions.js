import * as apiAlbums from '../../api/albums'

export const SET_ALBUMS_REQUEST_STATUS_PENDING =
  "SET_ALBUMS_REQUEST_STATUS_PENDING";

export const SET_ALBUMS_REQUEST_STATUS_FAILURE =
  "SET_ALBUMS_REQUEST_STATUS_FAILURE";

export const SET_ALBUMS = "SET_ALBUMS";


export const setAlbumsRequestStatusPending = () => ({
  type: SET_ALBUMS_REQUEST_STATUS_PENDING,
});

export const setAlbumsRequestSuccess = (albums) => ({
  type: SET_ALBUMS,
  payload: albums,
});

export const setAlbumsRequestStatusFailure = () => ({
  type: SET_ALBUMS_REQUEST_STATUS_FAILURE,
});

export const getAlbums = () => {
  return (dispatch) => {
    dispatch(setAlbumsRequestStatusPending());

    apiAlbums
      .getAlbums()
      .then((albums) => dispatch(setAlbumsRequestSuccess(albums)))
      .catch(() => dispatch(setAlbumsRequestStatusFailure()));
  };
};

export const SET_ALBUM_REQUEST_STATUS_PENDING =
  "SET_ALBUM_REQUEST_STATUS_PENDING";

export const SET_ALBUM_REQUEST_STATUS_FAILURE =
  "SET_ALBUM_REQUEST_STATUS_FAILURE";

export const SET_ALBUM = "SET_ALBUM";


export const setAlbumRequestStatusPending = () => ({
  type: SET_ALBUM_REQUEST_STATUS_PENDING,
});

export const setAlbumRequestSuccess = (albums) => ({
  type: SET_ALBUM,
  payload: albums,
});

export const setAlbumRequestStatusFailure = () => ({
  type: SET_ALBUM_REQUEST_STATUS_FAILURE,
});

export const getAlbum = (id) => {
  return (dispatch) => {
    dispatch(setAlbumRequestStatusPending());

    apiAlbums
      .getAlbum(id)
      .then((albums) => dispatch(setAlbumRequestSuccess(albums)))
      .catch(() => dispatch(setAlbumRequestStatusFailure()));
  };
};