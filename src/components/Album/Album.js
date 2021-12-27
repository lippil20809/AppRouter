import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ErrorInterceptor from "../../hocs/ErrorInterceptor";

const AlbumWrapper = styled("div")`
  flex: 1 0 calc(25% - 8px);
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

  > button {
    width: 100%;
    margin-top: auto;
  }
`;

const Album = ({ id, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/albums/${id}`);
  };



  return (
    <AlbumWrapper>
      <h6>{title}</h6>
      <button onClick={handleClick}>detail</button>
    </AlbumWrapper>
  );
};


export default ErrorInterceptor(Album);

Album.protoTypes = {
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
  }
