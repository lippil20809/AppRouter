import React, { useEffect } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
//import { getUser } from '../../api/users';
import { getUser, getSliceUsers } from '../../store/users';
import * as Statuses from '../../store/statuses';
import { getPost, getSlice, getComments } from '../../store/posts';
//import { getPost, getPostComments } from '../../api/posts';
//import useRequest from '../../hooks/useRequest';
import { useLocales } from "../../providers/LocalesProvider";

const PostDetailWrapper = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
  color: ${(props) => props.theme.color.main};

  > a {
      color: ${(props) => props.theme.color.main};
    }

`;

const CommentsWrapper = styled('ol')`
  margin: 0px 0px 0px 16px;
  padding: 0px;

  > li {
    border-bottom: 1px solid gray;
    padding: 4px;

    > h5 {
      margin: 0px 0px 8px;
    }

    > span {
      font-size: 12px;
    }

    > p {
      margin: 4px 0px 0px;
    }
  }
`;

const PostDetail = () => {
  const dispatch = useDispatch();
  const { post, postRequestStatus, comments, commentsRequestStatus } = useSelector(getSlice);
  const { user } = useSelector(getSliceUsers);
  const params = useParams();
  const {trans} = useLocales()

  useEffect(() => {
    if (params.id) {
      dispatch(getPost(params.id));
      dispatch(getComments(params.id));
    }
    if (post?.userId) 
    {
      dispatch(getUser(post.userId));
    }
  }, [dispatch, params.id, post?.userId]);

  const isLoading = postRequestStatus === Statuses.PENDING || commentsRequestStatus === Statuses.PENDING;
  const isError = postRequestStatus === Statuses.FAILURE || commentsRequestStatus === Statuses.FAILURE;

  return (
    <PostDetailWrapper>
      <Link to="/posts">{trans.posts}</Link>
      {isLoading && 'loading...'}
      {isError && 'some error...'}
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
      <Link to={`/users/${post?.userId}`}>{user?.username}</Link>
      <CommentsWrapper>
        {!isLoading &&
          !isError &&
          comments.map(comment => (
            <li key={comment.id}>
              <h5>{comment.name}</h5>
              <span>{comment.email}</span>
              <p>{comment.body}</p>
            </li>
          ))}
      </CommentsWrapper>
    </PostDetailWrapper>
  );
};

// const PostDetail = () => {
//   const params = useParams();
//   const requestPost = useCallback(() => getPost(params.id), [params.id]);
//   const requestComments = useCallback(() => getPostComments(params.id), [params.id]);
//   const { data: post, loading, error } = useRequest(requestPost);
//   const { data: comments } = useRequest(requestComments);
//   const requestUsersID = useCallback(() => {
//   if (!post?.userId) return Promise.resolve();
//     return getUser(post?.userId);
//   }, [post?.userId]);
//   const { data: user } = useRequest(requestUsersID);

//   return (
//     <PostDetailWrapper>
//       <Link to="/posts">Posts</Link>
//       {loading && 'loading...'}
//       {error && 'some error...'}
//       {post && (
//         <>
//           <h1>{post.title}</h1>
//           <p>{post.body}</p>
//         </>
//       )}
//       <Link to={`/users/${post?.userId}`}>{user?.username}</Link>
//       {comments &&
//         comments.map(todo => (
//           <div key={todo.id}>
//             <ul>
//               <li>{todo.name}</li>
//               <li>{todo.email}</li>
//               <li>{todo.body}</li>
//             </ul>
//           </div>
//         ))}
//     </PostDetailWrapper>
//   );
// };

export default PostDetail;
