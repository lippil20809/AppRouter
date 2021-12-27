import React, { useState, useCallback } from 'react';

import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../api/users';
import { getTodo } from '../../api/todos';
import useRequest from '../../hooks/useRequest';

const TodoDetailWrapper = styled('section')`
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
  const requestTodo = useCallback(() => getTodo(params.id), [params.id]);
  const { data: todo, loading, error } = useRequest(requestTodo);
  const { completed, setCompleted } = useState(false);

  const requestAlbumId = useCallback(() => {
    if (!todo?.userId) return Promise.resolve();
    return getUser(todo?.userId);
  }, [todo?.userId]);
  const { data: user } = useRequest(requestAlbumId);

  return (
    <TodoDetailWrapper>
      <Link to="/todos">Todos</Link>
      {loading && 'loading...'}
      {error && 'some error...'}
      {todo && (
        <>
          <h1>{todo.title}</h1>
          <input type="checkbox" checked={todo.completed} onChange={() => setCompleted(!completed)} />
        </>
      )}
      <Link to={`/users/${todo?.userId}`}>{user?.name}</Link>
    </TodoDetailWrapper>
  );
};

export default TodoDetail;
