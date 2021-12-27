import React from "react";

import styled from "styled-components";

import { getTodos } from "../../api/todos";
import Todo from "../../components/Todo";
import useRequest from "../../hooks/useRequest";

const TodosWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const Todos = () => {
  const { data: todos, loading, error } = useRequest(getTodos);

  return (
    <TodosWrapper>
      {loading && "loading..."}
      {error && "some error..."}
      {!loading &&
        !error &&
        todos &&
        todos.map((todo) => <Todo key={todo.id} {...todo} />)}
    </TodosWrapper>
  );
};

export default Todos;
