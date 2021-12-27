import React from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorInterceptor from "../../hocs/ErrorInterceptor";

const TodosWrapper = styled("div")`
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

const Todo = ({ id, title, completed }) => {
  const [completeds, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/todos/${id}`);
  };

  return (
    <TodosWrapper>
      <h6>{title}</h6>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completeds)}
      />
      <button onClick={handleClick}>detail</button>
    </TodosWrapper>
  );
};

export default ErrorInterceptor(Todo);
