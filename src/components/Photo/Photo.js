import React from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ErrorInterceptor from '../../hocs/ErrorInterceptor';

const PhotoWrapper = styled('div')`
  flex: 1 0 calc(33% - 8px);
  display: flex;
  flex-direction: column;
  border: 1.5px solid gray;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 8px;
  margin: 4px;

  > h6 {
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid gray;
    padding-bottom: 8px;
    margin-top: 0px;
    margin-bottom: 8px;
  }

  > img {
    width: 100px;
    height: 100px;
  }

  > button {
    width: 100%;
    margin-top: auto;
  }
`;

const Photo = ({ id, title, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/photos/${id}`);
  };

  return (
    <PhotoWrapper>
      <h6>{title}</h6>
      <img src={url} />
      <button onClick={handleClick}>detail</button>
    </PhotoWrapper>
  );
};

export default ErrorInterceptor(Photo);
