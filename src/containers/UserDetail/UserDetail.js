import React from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { Link , useParams} from "react-router-dom";
import { getAlbum } from '../../api/albums'
import { getUser } from "../../api/users";
import useRequest from "../../hooks/useRequest";

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
  const requestUser =  useCallback (() => getUser(params.id),[params.id])
  const { data: user, loading, error } = useRequest(requestUser);

  const requestAlbumId =  useCallback (() => {
    if(!user?.id) return Promise.resolve()
    return getAlbum(user?.id)
  },[user?.id])
  const { data: album} = useRequest(requestAlbumId);

  return (
    <UserDetailWrapper>
      <Link to="/users">Users</Link>
      {loading && "loading..."}
      {error && "some error..."}
      {user && (
        <>
          <h6>
            {user.name} {user.username}
          </h6>
          <ul>
            <li>email: {user.email}</li>
            <li>street: {user.street}</li>
            <li>suite: {user.suite}</li>
            <li>city: {user.city}</li>
            <li>phone: {user.phone}</li>
            <li>website: {user.website}</li>
          </ul>
        </>
      )}
      <Link to={`/albums/${user?.id}`}>{album?.title}</Link> 
    </UserDetailWrapper>
  );
};

export default UserDetail;
