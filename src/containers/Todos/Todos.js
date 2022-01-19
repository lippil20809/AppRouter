import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as Statuses from '../../store/statuses';
import { getSlice, getTodos } from '../../store/todos';
//import { getTodos } from "../../api/todos";
import Todo from '../../components/Todo';
//mport useRequest from "../../hooks/useRequest";

const TodosWrapper = styled('section')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;

  > a {
    color: ${(props) => props.theme.color.main};
  }
`;

const Todos = () => {
  const dispatch = useDispatch();
  const { todos, todosRequestStatus } = useSelector(getSlice);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <TodosWrapper>
      {todosRequestStatus === Statuses.PENDING && 'loading...'}
      {todosRequestStatus === Statuses.FAILURE && 'some error...'}
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </TodosWrapper>
  );
};

// const Todos = () => {
//   const { data: todos, loading, error } = useRequest(getTodos);

//   return (
//     <TodosWrapper>
//       {loading && "loading..."}
//       {error && "some error..."}
//       {!loading &&
//         !error &&
//         todos &&
//         todos.map((todo) => <Todo key={todo.id} {...todo} />)}
//     </TodosWrapper>
//   );
// };

export default Todos;
