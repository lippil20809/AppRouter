import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as Statuses from '../../store/statuses';
import { Link, useParams } from 'react-router-dom';
import { getSliceAlbums, getAlbum } from '../../store/albums';
import { getSlicePhotos, getPhoto } from '../../store/photos';
import { useLocales } from "../../providers/LocalesProvider";
//import { getAlbum } from '../../api/albums';
//import { getPhoto } from '../../api/photos';
//import useRequest from '../../hooks/useRequest';

const AlbumDetailWrapper = styled('section')`
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

const AlbumDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { album, albumsRequestStatus } = useSelector(getSliceAlbums);
  const { photo } = useSelector(getSlicePhotos);
  const {trans} = useLocales()

  useEffect(() => {
    if (params.id) {
      dispatch(getAlbum(params.id));
    }
    if (!album?.userId) return Promise.resolve();
    {
      dispatch(getPhoto(album?.userId));
    }
  }, [dispatch, params.id, album?.userId]);

  return (
    <AlbumDetailWrapper>
      <Link to="/albums">{trans.albums}</Link>
      {albumsRequestStatus === Statuses.PENDING && 'loading...'}
      {albumsRequestStatus === Statuses.FAILURE && 'some error...'}
      {album && (
        <>
          <h1>{album.title}</h1>
        </>
      )}
      <Link to={`/photos/${album?.userId}`}>{photo?.url}</Link>
    </AlbumDetailWrapper>
  );
};
export default AlbumDetail;
// const AlbumDetail = () => {
//   const params = useParams();
//   const requestPost = useCallback(() => getAlbum(params.id), [params.id]);
//   const { data: albums, loading, error } = useRequest(requestPost);

//   const requestAlbumId = useCallback(() => {
//     if (!albums?.userId) return Promise.resolve();
//     return getPhoto(albums?.userId);
//   }, [albums?.userId]);
//   const { data: photo } = useRequest(requestAlbumId);

//   return (
//     <AlbumDetailWrapper>
//       <Link to="/albums">Albums</Link>
//       {loading && 'loading...'}
//       {error && 'some error...'}
//       {albums && (
//         <>
//           <h1>{albums.title}</h1>
//         </>
//       )}
//       <Link to={`/photos/${albums?.userId}`}>{photo?.url}</Link>
//     </AlbumDetailWrapper>
//   );
// };
