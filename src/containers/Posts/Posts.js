import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Post from '../../components/Post';

import { getPosts, getSlice } from '../../store/posts';
import * as Statuses from '../../store/statuses';

//import { getPosts } from '../../api/posts';
//import useRequest from '../../hooks/useRequest';

const PostsWrapper = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;

  > a {
    color: ${(props) => props.theme.color.main};
  }
`;

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, postsRequestStatus } = useSelector(getSlice);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <PostsWrapper>
      {postsRequestStatus === Statuses.PENDING && 'loading...'}
      {postsRequestStatus === Statuses.FAILURE && 'some error...'}
      {posts?.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </PostsWrapper>
  );
};

// const Posts = () => {
//   const { data: posts, loading, error } = useRequest(getPosts);

//   return (
//     <PostsWrapper>
//       {loading && 'loading...'}
//       {error && 'some error...'}
//       {!loading && !error && posts && posts.map(post => <Post key={post.id} {...post} />)}
//     </PostsWrapper>
//   );
// };

export default Posts;
