import {
  SET_PHOTO,
  SET_PHOTO_REQUEST_STATUS_PENDING,
  SET_PHOTO_REQUEST_STATUS_FAILURE,
  SET_PHOTOS,
  SET_PHOTOS_REQUEST_STATUS_PENDING,
  SET_PHOTOS_REQUEST_STATUS_FAILURE,
} from '../photos.actions';
import { photosReducer, initialState } from '../photos.reducer';
import * as Statuses from '../../statuses';
describe('photosReducer', () => {
  it('SET_PHOTOS_REQUEST_STATUS_PENDING', () => {
    const actin = { type: SET_PHOTOS_REQUEST_STATUS_PENDING };

    expect(photosReducer(initialState, actin)).toEqual({ ...initialState, photosRequestStatus: Statuses.PENDING });
  });

  it('SET_PHOTOS_REQUEST_STATUS_FAILURE', () => {
    const actin = { type: SET_PHOTOS_REQUEST_STATUS_FAILURE };

    expect(photosReducer(initialState, actin)).toEqual({ ...initialState, photosRequestStatus: Statuses.FAILURE });
  });

  it('SET_PHOTOS', () => {
    const actin = {
      type: SET_PHOTOS,
      payload: [
        {
          albumId: 1,
          id: 1,
          title: 'title',
          url: 'url',
          thumbnailUrl: 'thumbnailUrl',
        },
      ],
    };

    expect(photosReducer(initialState, actin)).toEqual({
      ...initialState,
      photosRequestStatus: Statuses.SUCCESS,
      photos: [
        {
          albumId: 1,
          id: 1,
          title: 'title',
          url: 'url',
          thumbnailUrl: 'thumbnailUrl',
        },
      ],
    });
  });

  it('SET_PHOTO_REQUEST_STATUS_PENDING', () => {
    const actin = { type: SET_PHOTO_REQUEST_STATUS_PENDING };

    expect(photosReducer(initialState, actin)).toEqual({ ...initialState, photoRequestStatus: Statuses.PENDING });
  });

  it('SET_PHOTO_REQUEST_STATUS_FAILURE', () => {
    const actin = { type: SET_PHOTO_REQUEST_STATUS_FAILURE };

    expect(photosReducer(initialState, actin)).toEqual({ ...initialState, photoRequestStatus: Statuses.FAILURE });
  });

  it('SET_PHOTO', () => {
    const actin = {
      type: SET_PHOTO,
      payload: [
        {
          albumId: 1,
          id: 1,
          title: 'title',
          url: 'url',
          thumbnailUrl: 'thumbnailUrl',
        },
      ],
    };

    expect(photosReducer(initialState, actin)).toEqual({
      ...initialState,
      photoRequestStatus: Statuses.SUCCESS,
      photo: [
        {
          albumId: 1,
          id: 1,
          title: 'title',
          url: 'url',
          thumbnailUrl: 'thumbnailUrl',
        },
      ],
    });
  });
});
