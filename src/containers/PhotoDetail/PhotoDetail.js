import React , {useCallback } from "react";

import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { getPhoto } from "../../api/photos";
import useRequest from "../../hooks/useRequest";


const PhotoDetailWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;

  > img {
      width: 100px;
      height: 100px;
  }
`;

const PhotoDetail = () => {

  const params = useParams();
  const requestPost =  useCallback (() => getPhoto(params.id),[params.id])
  const { data: photo, loading, error } = useRequest(requestPost);


 

  
  return (
    <PhotoDetailWrapper>
      <Link to="/photos">Photos</Link>
      {loading && "loading..."}
      {error && "some error..."}
      {photo && (
        <>
          <h1>{photo.title}</h1>
          <img src={photo.url}/>
        </>
      )}
    </PhotoDetailWrapper>
  );
};

export default PhotoDetail;
