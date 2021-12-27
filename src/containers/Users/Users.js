import React from 'react';
import styled from 'styled-components';
import { getUsers } from '../../api/users';
import User from '../../components/User';
import useRequest from '../../hooks/useRequest';

const UsersWrapper = styled('section')`
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
  const { data: users, loading, error } = useRequest(getUsers);

  return (
    <UsersWrapper>
      {loading && 'loading...'}
      {error && 'some error...'}
      {!loading && !error && users?.map(user => <User key={user.id} {...user} />)}
    </UsersWrapper>
  );
};

export default Users;
