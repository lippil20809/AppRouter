import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { getUsers } from "../../api/users";
import User from "../../components/User";

const UsersWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getUsers()
      .then((users) => setUsers(users))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <UsersWrapper>
      {loading && "loading..."}
      {error && "some error..."}
      {!loading &&
        !error &&
        users.map((user) => <User key={user.id} {...user} />)}
    </UsersWrapper>
  );
};

export default Users;
