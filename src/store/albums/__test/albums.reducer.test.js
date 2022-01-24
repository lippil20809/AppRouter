import {
    SET_ALBUM,
    SET_ALBUM_REQUEST_STATUS_FAILURE,
    SET_ALBUM_REQUEST_STATUS_PENDING,
    SET_ALBUMS,
    SET_ALBUMS_REQUEST_STATUS_PENDING,
    SET_ALBUMS_REQUEST_STATUS_FAILURE
} from '../albums.actions'
import {albumsReducer,initialState} from '../albums.reducer'
import * as Statuses from '../../statuses';
describe('albumsReducer', () => {
    it('SET_ALBUMS_REQUEST_STATUS_PENDING', () => {
      const actin = { type: SET_ALBUMS_REQUEST_STATUS_PENDING };
  
      expect(albumsReducer(initialState, actin)).toEqual({ ...initialState, albumsRequestStatus: Statuses.PENDING });
    });
  
    it('SET_ALBUMS_REQUEST_STATUS_FAILURE', () => {
      const actin = { type: SET_ALBUMS_REQUEST_STATUS_FAILURE };
  
      expect(albumsReducer(initialState, actin)).toEqual({ ...initialState, albumsRequestStatus: Statuses.FAILURE });
    });
  
    it('SET_ALBUMS', () => {
      const actin = {
        type: SET_ALBUMS,
        payload: [
          {
            userId: 1,
            id: 1,
            title: "title"
          },
        ],
      };
  
      expect(albumsReducer(initialState, actin)).toEqual({
        ...initialState,
        albumsRequestStatus: Statuses.SUCCESS,
        albums: [
          {
            userId: 1,
            id: 1,
            title: "title"
          },
        ],
      });
    });
  
    it('SET_ALBUM_REQUEST_STATUS_PENDING', () => {
      const actin = { type: SET_ALBUM_REQUEST_STATUS_PENDING };
  
      expect(albumsReducer(initialState, actin)).toEqual({ ...initialState, albumRequestStatus: Statuses.PENDING });
    });
  
    it('SET_ALBUM_REQUEST_STATUS_FAILURE', () => {
      const actin = { type: SET_ALBUM_REQUEST_STATUS_FAILURE };
  
      expect(albumsReducer(initialState, actin)).toEqual({ ...initialState, albumRequestStatus: Statuses.FAILURE });
    });
  
    it('SET_ALBUM', () => {
      const actin = {
        type: SET_ALBUM,
        payload: [
          {
            userId: 1,
            id: 1,
            title: "title"
          },
        ],
      };
  
      expect(albumsReducer(initialState, actin)).toEqual({
        ...initialState,
        albumRequestStatus: Statuses.SUCCESS,
        album: [
          {
            userId: 1,
            id: 1,
            title: "title"
          },
        ],
      });
    });
  });