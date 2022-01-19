import React , {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import * as Statuses from "../../store/statuses";
import {getSliceAlbums,getAlbums} from '../../store/albums'
//import { getAlbums } from '../../api/albums';
import Album from '../../components/Album';
//import useRequest from '../../hooks/useRequest';

const AlbumsWrapper = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
  
`;

const Albums = () => {
  const dispatch = useDispatch();
  const { albums, albumsRequestStatus } = useSelector(getSliceAlbums);

  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  return (
    <AlbumsWrapper>
       {albumsRequestStatus === Statuses.PENDING && "loading..."}
      {albumsRequestStatus === Statuses.FAILURE && "some error..."}
      {albums.map(album => <Album key={album.id} {...album} />)}
    </AlbumsWrapper>
  );
};

// const Albums = () => {
//   const { data: albums, loading, error } = useRequest(getAlbums);

//   return (
//     <AlbumsWrapper>
//       {loading && 'loading...'}
//       {error && 'some error...'}
//       {!loading && !error && albums && albums.map(album => <Album key={album.id} {...album} />)}
//     </AlbumsWrapper>
//   );
// };

export default Albums;
