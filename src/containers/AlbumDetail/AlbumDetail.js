import React, { useCallback } from 'react';

import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { getAlbum } from '../../api/albums';
import { getPhoto } from '../../api/photos';
import useRequest from '../../hooks/useRequest';

const AlbumDetailWrapper = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const AlbumDetail = () => {
  const params = useParams();
  const requestPost = useCallback(() => getAlbum(params.id), [params.id]);
  const { data: albums, loading, error } = useRequest(requestPost);

  const requestAlbumId = useCallback(() => {
    if (!albums?.userId) return Promise.resolve();
    return getPhoto(albums?.userId);
  }, [albums?.userId]);
  const { data: photo } = useRequest(requestAlbumId);

  return (
    <AlbumDetailWrapper>
      <Link to="/albums">Albums</Link>
      {loading && 'loading...'}
      {error && 'some error...'}
      {albums && (
        <>
          <h1>{albums.title}</h1>
        </>
      )}
      <Link to={`/photos/${albums?.userId}`}>{photo?.url}</Link>
    </AlbumDetailWrapper>
  );
};

export default AlbumDetail;
