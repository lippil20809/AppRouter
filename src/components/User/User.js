import React from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ErrorInterceptor from "../../hocs/ErrorInterceptor";

const UserWrapper = styled("div")`
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

  > li {
    margin-top: auto;
    font-size: 14px;
    font-weight: 300;
  }

  > button {
    width: 100%;
    margin-top: auto;
  }
`;

const User = ({ id, name, username, email, address, phone, website }) => {
  const { street, suite, city } = address;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${id}`);
  };

  return (
    <UserWrapper>
      <h6>
        {name}
        {username}
      </h6>
      <ul>
        <li>email:{email}</li>
        <li>street:{street}</li>
        <li>suite:{suite}</li>
        <li>city:{city}</li>
        <li>phone:{phone}</li>
        <li>website:{website}</li>
      </ul>

      <button onClick={handleClick}>detail</button>
    </UserWrapper>
  );
};

export default ErrorInterceptor(User);
