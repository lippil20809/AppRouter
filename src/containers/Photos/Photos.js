import React from 'react';

import styled from 'styled-components';

import { getPhotos } from '../../api/photos';
import Photo from '../../components/Photo/Photo';
import useRequest from '../../hooks/useRequest';

const PhotosWrapper = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const Photos = () => {
  const { data: photos, loading, error } = useRequest(getPhotos);

  return (
    <PhotosWrapper>
      {loading && 'loading...'}
      {error && 'some error...'}
      {!loading && !error && photos && photos.map(photo => <Photo key={photo.id} {...photo} />)}
    </PhotosWrapper>
  );
};

export default Photos;
