import {
    SET_TODO,
    SET_TODO_REQUEST_STATUS_FAILURE,
    SET_TODO_REQUEST_STATUS_PENDING,
    SET_TODOS,
    SET_TODOS_REQUEST_STATUS_FAILURE,
    SET_TODOS_REQUEST_STATUS_PENDING
} from "../todos.actions"
import {todosReducer,initialState} from '../todos.reducer'
import * as Statuses from '../../statuses';

describe('todosReducer', () => {
    it('SET_TODOS_REQUEST_STATUS_PENDING', () => {
      const actin = { type: SET_TODOS_REQUEST_STATUS_PENDING };
  
      expect(todosReducer(initialState, actin)).toEqual({ ...initialState, todosRequestStatus: Statuses.PENDING });
    });
  
    it('SET_TODOS_REQUEST_STATUS_FAILURE', () => {
      const actin = { type: SET_TODOS_REQUEST_STATUS_FAILURE };
  
      expect(todosReducer(initialState, actin)).toEqual({ ...initialState, todosRequestStatus: Statuses.FAILURE });
    });
  
    it('SET_TODOS', () => {
      const actin = {
        type: SET_TODOS,
        payload: [
          {
            userId: 1,
            id: 1,
            title: 'title',
            completed: Boolean()
          },
        ],
      };
  
      expect(todosReducer(initialState, actin)).toEqual({
        ...initialState,
        todosRequestStatus: Statuses.SUCCESS,
        todos: [
            {
              userId: 1,
              id: 1,
              title: 'title',
              completed: Boolean()
            },
          ],
      });
    });
  
    it('SET_TODO_REQUEST_STATUS_PENDING', () => {
      const actin = { type: SET_TODO_REQUEST_STATUS_PENDING };
  
      expect(todosReducer(initialState, actin)).toEqual({ ...initialState, todoRequestStatus: Statuses.PENDING });
    });
  
    it('SET_TODO_REQUEST_STATUS_FAILURE', () => {
      const actin = { type: SET_TODO_REQUEST_STATUS_FAILURE };
  
      expect(todosReducer(initialState, actin)).toEqual({ ...initialState, todoRequestStatus: Statuses.FAILURE });
    });
  
    it('SET_TODO', () => {
      const actin = {
        type: SET_TODO,
        payload:[
            {
              userId: 1,
              id: 1,
              title: 'title',
              completed: Boolean()
            },
          ],
      };
  
      expect(todosReducer(initialState, actin)).toEqual({
        ...initialState,
        todoRequestStatus: Statuses.SUCCESS,
        todo: [
            {
              userId: 1,
              id: 1,
              title: 'title',
              completed: Boolean()
            },
          ],
      });
    });
  });
