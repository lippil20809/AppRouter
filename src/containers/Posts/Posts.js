import React from "react";

import styled from "styled-components";

import { getPosts } from "../../api/posts";
import Post from "../../components/Post";
import useRequest from "../../hooks/useRequest";

const PostsWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const Posts = () => {
  const { data: posts, loading, error } = useRequest(getPosts);

  return (
    <PostsWrapper>
      {loading && "loading..."}
      {error && "some error..."}
      {!loading &&
        !error &&
        posts &&
        posts.map((post) => <Post key={post.id} {...post} />)}
    </PostsWrapper>
  );
};

export default Posts;
