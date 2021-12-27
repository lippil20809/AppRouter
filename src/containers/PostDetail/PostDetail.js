import React , {useCallback } from "react";

import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../api/users";
import { getPost, getPostComments } from "../../api/posts";
import useRequest from "../../hooks/useRequest";


const PostDetailWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const PostDetail = () => {

  const params = useParams();
  const requestPost =  useCallback (() => getPost(params.id),[params.id])
  const requestComments =  useCallback (() => getPostComments(params.id),[params.id])
  const { data: post, loading, error } = useRequest(requestPost);
  const { data: comments } = useRequest(requestComments);
  const requestUsersID =  useCallback (() => {
    if(!post?.userId) return Promise.resolve()
    return getUser(post?.userId)
  },[post?.userId])
  const { data: user} = useRequest(requestUsersID);
 

  
  return (
    <PostDetailWrapper>
      <Link to="/posts">Posts</Link>
      {loading && "loading..."}
      {error && "some error..."}
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
      <Link to={`/users/${post?.userId}`}>{user?.username}</Link>
      {comments &&
        comments.map((todo) => (
          <div key={todo.id}>
            <ul>
              <li>{todo.name}</li>
              <li>{todo.email}</li>
              <li>{todo.body}</li>
            </ul>
          </div>
        ))}
    </PostDetailWrapper>
  );
};

export default PostDetail;
