import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import * as Statuses from '../../store/statuses';
//import { getUser } from '../../api/users';
import { getUser, getSliceUsers } from '../../store/users';
import { getSlice, getTodo } from '../../store/todos';
import { useLocales } from "../../providers/LocalesProvider";
//import { getTodo } from '../../api/todos';
//import useRequest from '../../hooks/useRequest';

const TodoDetailWrapper = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
  color: ${(props) => props.theme.color.main};

  > a {
    color: ${(props) => props.theme.color.main};
  }
`;

const TodoDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { completed, setCompleted } = useState(false);
  const { todo, todoRequestStatus } = useSelector(getSlice);
  const { user } = useSelector(getSliceUsers);
  const {trans} = useLocales()

  useEffect(() => {
    if (params.id) {
      dispatch(getTodo(params.id));
    }
    if (!todo?.userId) return Promise.resolve();
    {
      dispatch(getUser(todo?.userId));
    }
  }, [dispatch, params.id,todo?.userId]);

  return (
    <TodoDetailWrapper>
      <Link to="/todos">{trans.todos}</Link>
      {todoRequestStatus === Statuses.PENDING && 'loading...'}
      {todoRequestStatus === Statuses.FAILURE && 'some error...'}
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

// const TodoDetail = () => {
//   const params = useParams();
//   const requestTodo = useCallback(() => getTodo(params.id), [params.id]);
//   const { data: todo, loading, error } = useRequest(requestTodo);
//   const { completed, setCompleted } = useState(false);

//   const requestAlbumId = useCallback(() => {
//     if (!todo?.userId) return Promise.resolve();
//     return getUser(todo?.userId);
//   }, [todo?.userId]);
//   const { data: user } = useRequest(requestAlbumId);

//   return (
//     <TodoDetailWrapper>
//       <Link to="/todos">Todos</Link>
//       {loading && 'loading...'}
//       {error && 'some error...'}
//       {todo && (
//         <>
//           <h1>{todo.title}</h1>
//           <input type="checkbox" checked={todo.completed} onChange={() => setCompleted(!completed)} />
//         </>
//       )}
//       <Link to={`/users/${todo?.userId}`}>{user?.name}</Link>
//     </TodoDetailWrapper>
//   );
// };

export default TodoDetail;
