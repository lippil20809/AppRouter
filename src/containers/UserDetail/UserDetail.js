import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

import { getUser } from "../../api/users";

const UserDetailWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const UserDetail = () => {
  const params = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    setLoading(true);

    getUser(params.id)
      .then((user) => setUser(user))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [params.id]);


  return (
    
    <UserDetailWrapper>
       <Link to="users">Users</Link>
      {loading && "loading..."}
      {error && "some error..."}
      {user && (
        <>
          <h6>{user.name}{user.username}</h6>
      <ul>
          <li>email:{user.email}</li>
          <li>street:{user.street}</li>
          <li>suite:{user.suite}</li>
          <li>city:{user.city}</li>
          <li>phone:{user.phone}</li>
          <li>website:{user.website}</li>
      </ul>
        </>
      )}
    </UserDetailWrapper>
  );
};

export default UserDetail;
