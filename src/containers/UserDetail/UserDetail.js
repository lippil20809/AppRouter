import React , { useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import * as Statuses from '../../store/statuses';
import { Link, useParams } from 'react-router-dom';
//import { getAlbum } from '../../api/albums';
//import { getUser } from '../../api/users';
import {getSliceUsers,getUser} from '../../store/users'
import {getSliceAlbums,getAlbum} from '../../store/albums'
import { useLocales } from "../../providers/LocalesProvider";
//import useRequest from '../../hooks/useRequest';

const UserDetailWrapper = styled('section')`
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

const UserDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user, userRequestStatus } = useSelector(getSliceUsers);
  const {album} = useSelector(getSliceAlbums)
  const {trans} = useLocales()

  useEffect(() => {
    if (params.id) {
      dispatch(getUser(params.id));
    }
    if (!user?.userId) return Promise.resolve();
    {
      dispatch(getAlbum(user?.userId));
    }
  }, [dispatch, params.id,user?.userId]);

  return (
    <UserDetailWrapper>
      <Link to="/users">{trans.users}</Link>
      {userRequestStatus === Statuses.PENDING && 'loading...'}
      {userRequestStatus === Statuses.FAILURE && 'some error...'}
      {user && (
        <>
          <h6>
            {user.name} {user.username}
          </h6>
          <ul>
            <li>{trans.email}: {user.email}</li>
            <li>{trans.street}: {user.street}</li>
            <li>{trans.suite}: {user.suite}</li>
            <li>{trans.city}: {user.city}</li>
            <li>{trans.phone}: {user.phone}</li>
            <li>{trans.website}: {user.website}</li>
          </ul>
        </>
      )}
      <Link to={`/albums/${user?.id}`}>{album?.title}</Link>
    </UserDetailWrapper>
  );
};

// const UserDetail = () => {
//   const params = useParams();
//   const requestUser = useCallback(() => getUser(params.id), [params.id]);
//   const { data: user, loading, error } = useRequest(requestUser);

//   const requestAlbumId = useCallback(() => {
//     if (!user?.id) return Promise.resolve();
//     return getAlbum(user?.id);
//   }, [user?.id]);
//   const { data: album } = useRequest(requestAlbumId);

//   return (
//     <UserDetailWrapper>
//       <Link to="/users">Users</Link>
//       {loading && 'loading...'}
//       {error && 'some error...'}
//       {user && (
//         <>
//           <h6>
//             {user.name} {user.username}
//           </h6>
//           <ul>
//             <li>email: {user.email}</li>
//             <li>street: {user.street}</li>
//             <li>suite: {user.suite}</li>
//             <li>city: {user.city}</li>
//             <li>phone: {user.phone}</li>
//             <li>website: {user.website}</li>
//           </ul>
//         </>
//       )}
//       <Link to={`/albums/${user?.id}`}>{album?.title}</Link>
//     </UserDetailWrapper>
//   );
// };

export default UserDetail;
