import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { getTodos } from "../../api/todos";
import Todo from "../../components/Todo";

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
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTodos()
      .then((todos) => setTodos(todos))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <TodosWrapper>
      {loading && "loading..."}
      {error && "some error..."}
      {!loading &&
        !error &&
        todos.map((todo) => <Todo key={todo.id} {...todo} />)}
    </TodosWrapper>
  );
};

export default Todos;