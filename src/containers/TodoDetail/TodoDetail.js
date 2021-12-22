import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

import { getTodo } from "../../api/todos";

const TodoDetailWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const TodoDetail = () => {
  const params = useParams();

  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [completed, setCompleted] = useState(false);
  
  useEffect(() => {
    setLoading(true);

    getTodo(params.id)
      .then((todo) => setTodo(todo))
      .catch(() => setError(true))
      .finally(() => setLoading(false));

  }, [params.id]);


  return (
    
    <TodoDetailWrapper>
       <Link to="todos">Todos</Link>
      {loading && "loading..."}
      {error && "some error..."}
      {todo && (
        <>
          <h1>{todo.title}</h1>
          <input type='checkbox' checked={todo.completed} onChange={() => setCompleted(!completed)}/>
        </>
      )}
    </TodoDetailWrapper>
  );
};

export default TodoDetail;