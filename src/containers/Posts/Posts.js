import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { getPosts } from "../../api/posts";
import Post from "../../components/Post";

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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getPosts()
      .then((posts) => setPosts(posts))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PostsWrapper>
      {loading && "loading..."}
      {error && "some error..."}
      {!loading &&
        !error &&
        posts.map((post) => <Post key={post.id} {...post} />)}
    </PostsWrapper>
  );
};

export default Posts;
