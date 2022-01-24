import {
  SET_USER,
  SET_USER_REQUEST_STATUS_FAILURE,
  SET_USER_REQUEST_STATUS_PENDING,
  SET_USERS,
  SET_USERS_REQUEST_STATUS_FAILURE,
  SET_USERS_REQUEST_STATUS_PENDING,
} from '../users.actions';
import { usersReducer, initialState } from '../users.reducer';
import * as Statuses from '../../statuses';
describe('usersReducer', () => {
  it('SET_USERS_REQUEST_STATUS_PENDING', () => {
    const actin = { type: SET_USERS_REQUEST_STATUS_PENDING };

    expect(usersReducer(initialState, actin)).toEqual({ ...initialState, usersRequestStatus: Statuses.PENDING });
  });

  it('SET_USERS_REQUEST_STATUS_FAILURE', () => {
    const actin = { type: SET_USERS_REQUEST_STATUS_FAILURE };

    expect(usersReducer(initialState, actin)).toEqual({ ...initialState, usersRequestStatus: Statuses.FAILURE });
  });

  it('SET_USERS', () => {
    const actin = {
      type: SET_USERS,
      payload: [
        {
          id: 1,
          name: 'name',
          username: 'username',
          email: 'email',
          address: {
            street: 'street',
            suite: 'suite',
            city: 'city',
            zipcode: 'zipcode',
            geo: {
              lat: 'lat',
              lng: 'lng',
            },
          },
          phone: 'phone',
          website: 'website',
          company: {
            name: 'name',
            catchPhrase: 'catchPhrase',
            bs: 'bs',
          },
        },
      ],
    };

    expect(usersReducer(initialState, actin)).toEqual({
      ...initialState,
      usersRequestStatus: Statuses.SUCCESS,
      users: [
        {
          id: 1,
          name: 'name',
          username: 'username',
          email: 'email',
          address: {
            street: 'street',
            suite: 'suite',
            city: 'city',
            zipcode: 'zipcode',
            geo: {
              lat: 'lat',
              lng: 'lng',
            },
          },
          phone: 'phone',
          website: 'website',
          company: {
            name: 'name',
            catchPhrase: 'catchPhrase',
            bs: 'bs',
          },
        },
      ],
    });
  });

  it('SET_USER_REQUEST_STATUS_PENDING', () => {
    const actin = { type: SET_USER_REQUEST_STATUS_PENDING };

    expect(usersReducer(initialState, actin)).toEqual({ ...initialState, userRequestStatus: Statuses.PENDING });
  });

  it('SET_USER_REQUEST_STATUS_FAILURE', () => {
    const actin = { type: SET_USER_REQUEST_STATUS_FAILURE };

    expect(usersReducer(initialState, actin)).toEqual({ ...initialState, userRequestStatus: Statuses.FAILURE });
  });

  it('SET_USER', () => {
    const actin = {
      type: SET_USER,
      payload: [
        {
          id: 1,
          name: 'name',
          username: 'username',
          email: 'email',
          address: {
            street: 'street',
            suite: 'suite',
            city: 'city',
            zipcode: 'zipcode',
            geo: {
              lat: 'lat',
              lng: 'lng',
            },
          },
          phone: 'phone',
          website: 'website',
          company: {
            name: 'name',
            catchPhrase: 'catchPhrase',
            bs: 'bs',
          },
        },
      ],
    };

    expect(usersReducer(initialState, actin)).toEqual({
      ...initialState,
      userRequestStatus: Statuses.SUCCESS,
      user: [
        {
          id: 1,
          name: 'name',
          username: 'username',
          email: 'email',
          address: {
            street: 'street',
            suite: 'suite',
            city: 'city',
            zipcode: 'zipcode',
            geo: {
              lat: 'lat',
              lng: 'lng',
            },
          },
          phone: 'phone',
          website: 'website',
          company: {
            name: 'name',
            catchPhrase: 'catchPhrase',
            bs: 'bs',
          },
        },
      ],
    });
  });
});
