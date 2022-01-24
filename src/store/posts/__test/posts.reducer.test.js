import {
  SET_POSTS_REQUEST_STATUS_PENDING,
  SET_POSTS_REQUEST_STATUS_FAILURE,
  SET_POSTS,
  SET_POST_COMMENTS_REQUEST_STATUS_PENDING,
  SET_POST_COMMENTS_REQUEST_STATUS_FAILURE,
  SET_POST,
  SET_POST_REQUEST_STATUS_FAILURE,
  SET_POST_REQUEST_STATUS_PENDING,
  SET_POST_COMMENTS,
} from '../posts.actions';
import { postsReducer, initialState } from '../posts.reducer';
import * as Statuses from '../../statuses';
describe('postsReducer', () => {
  it('SET_POSTS_REQUEST_STATUS_PENDING', () => {
    const actin = { type: SET_POSTS_REQUEST_STATUS_PENDING };

    expect(postsReducer(initialState, actin)).toEqual({ ...initialState, postsRequestStatus: Statuses.PENDING });
  });

  it('SET_POSTS_REQUEST_STATUS_FAILURE', () => {
    const actin = { type: SET_POSTS_REQUEST_STATUS_FAILURE };

    expect(postsReducer(initialState, actin)).toEqual({ ...initialState, postsRequestStatus: Statuses.FAILURE });
  });

  it('SET_POSTS', () => {
    const actin = {
      type: SET_POSTS,
      payload: [
        {
          id: 1,
          userId: 1,
          title: 'title',
          body: 'body',
        },
      ],
    };

    expect(postsReducer(initialState, actin)).toEqual({
      ...initialState,
      postsRequestStatus: Statuses.SUCCESS,
      posts: [
        {
          id: 1,
          userId: 1,
          title: 'title',
          body: 'body',
        },
      ],
    });
  });

  it('SET_POST_REQUEST_STATUS_PENDING', () => {
    const actin = { type: SET_POST_REQUEST_STATUS_PENDING };

    expect(postsReducer(initialState, actin)).toEqual({ ...initialState, postRequestStatus: Statuses.PENDING });
  });

  it('SET_POST_REQUEST_STATUS_FAILURE', () => {
    const actin = { type: SET_POST_REQUEST_STATUS_FAILURE };

    expect(postsReducer(initialState, actin)).toEqual({ ...initialState, postRequestStatus: Statuses.FAILURE });
  });

  it('SET_POST', () => {
    const actin = {
      type: SET_POST,
      payload: [
        {
          id: 1,
          userId: 1,
          title: 'title',
          body: 'body',
        },
      ],
    };

    expect(postsReducer(initialState, actin)).toEqual({
      ...initialState,
      postRequestStatus: Statuses.SUCCESS,
      post: [
        {
          id: 1,
          userId: 1,
          title: 'title',
          body: 'body',
        },
      ],
    });
  });

  it('SET_POST_COMMENTS_REQUEST_STATUS_PENDING', () => {
    const actin = { type: SET_POST_COMMENTS_REQUEST_STATUS_PENDING };

    expect(postsReducer(initialState, actin)).toEqual({ ...initialState, commentsRequestStatus: Statuses.PENDING });
  });

  it('SET_POST_COMMENTS_REQUEST_STATUS_FAILURE', () => {
    const actin = { type: SET_POST_COMMENTS_REQUEST_STATUS_FAILURE };

    expect(postsReducer(initialState, actin)).toEqual({ ...initialState, commentsRequestStatus: Statuses.FAILURE });
  });

  it('SET_POST_COMMENTS', () => {
    const actin = {
      type: SET_POST_COMMENTS,
      payload: [
        {
          postId: 1,
          id: 1,
          userId: 1,
          title: 'title',
          body: 'body',
        },
      ],
    };

    expect(postsReducer(initialState, actin)).toEqual({
      ...initialState,
      commentsRequestStatus: Statuses.SUCCESS,
      comments: [
        {
          postId: 1,
          id: 1,
          userId: 1,
          title: 'title',
          body: 'body',
        },
      ],
    });
  });
});

