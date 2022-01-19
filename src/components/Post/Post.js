import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLocales } from "../../providers/LocalesProvider";
import ErrorInterceptor from '../../hocs/ErrorInterceptor';

const PostWrapper = styled('div')`
  flex: 1 0 calc(25% - 8px);
  display: flex;
  flex-direction: column;
  border: 1.5px solid gray;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 8px;
  margin: 4px;
  color: ${(props) => props.theme.color.main};

  > h6 {
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid gray;
    padding-bottom: 8px;
    margin-top: 0px;
    margin-bottom: 8px;
  }

  > p {
    margin-top: auto;
    font-size: 14px;
    font-weight: 300;
  }

  > button {
    width: 100%;
    margin-top: auto;
  }
`;

const Post = ({ id, title, body }) => {
  const navigate = useNavigate();
  const {trans} = useLocales()
  const handleClick = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <PostWrapper>
      <h6>{title}</h6>
      <p>{body.slice(0, 12)}...</p>
      <Button onClick={handleClick}>{trans.details}</Button>
    </PostWrapper>
  );
};

export default ErrorInterceptor(Post);

Post.protoTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
