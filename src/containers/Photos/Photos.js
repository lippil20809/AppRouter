import React , {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import * as Statuses from "../../store/statuses";
import {getSlicePhotos,getPhotos} from '../../store/photos'
//import { getPhotos } from '../../api/photos';
import Photo from '../../components/Photo/Photo';
//import useRequest from '../../hooks/useRequest';

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
  const dispatch = useDispatch();
  const { photos, photosRequestStatus } = useSelector(getSlicePhotos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <PhotosWrapper>
      {photosRequestStatus === Statuses.PENDING && "loading..."}
      {photosRequestStatus === Statuses.FAILURE && "some error..."}
      {photos.map(photo => <Photo key={photo.id} {...photo} />)}
    </PhotosWrapper>
  );
};

export default Photos;
