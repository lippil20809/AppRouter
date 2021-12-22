import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

import { getPost, getPostComments } from "../../api/posts";

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

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLoading(true);

    getPost(params.id)
      .then((post) => setPost(post))
      .catch(() => setError(true))
      .finally(() => setLoading(false));

      getPostComments(params.id)
      .then((comments) => setComments(comments))
      .catch(() => setError(true))
      .finally(() => setLoading(false));

  }, [params.id]);


  return (
    
    <PostDetailWrapper>
       <Link to="posts">Posts</Link>
      {loading && "loading..."}
      {error && "some error..."}
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
      {comments.map((todo) => 
          <div key={todo.id}>
          <ul>
            <li>{todo.name}</li>
            <li>{todo.email}</li>
            <li>{todo.body}</li>
          </ul>
          </div>
        )
      }
      
    

    </PostDetailWrapper>
  );
};

export default PostDetail;
