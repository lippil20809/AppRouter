import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as Statuses from '../../store/statuses';
import { Link, useParams } from 'react-router-dom';
import {getSlicePhotos,getPhoto} from '../../store/photos'
import { useLocales } from "../../providers/LocalesProvider";
//import { getPhoto } from '../../api/photos';
//import useRequest from '../../hooks/useRequest';

const PhotoDetailWrapper = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
  color: ${(props) => props.theme.color.main};

  > img {
    width: 100px;
    height: 100px;
  }
  > a {
    color: ${(props) => props.theme.color.main};
  }
`;

const PhotoDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { photo, photosRequestStatus } = useSelector(getSlicePhotos);
  const {trans} = useLocales()
  useEffect(() => {
    if (params.id) {
      dispatch(getPhoto(params.id));
    }
  }, [dispatch, params.id]);

  return (
    <PhotoDetailWrapper>
      <Link to="/photos">{trans.photos}</Link>
      {photosRequestStatus === Statuses.PENDING && 'loading...'}
      {photosRequestStatus === Statuses.FAILURE && 'some error...'}
      {photo && (
        <>
          <h1>{photo.title}</h1>
          <img src={photo.url} alt='' />
        </>
      )}
    </PhotoDetailWrapper>
  );
};

export default PhotoDetail;
