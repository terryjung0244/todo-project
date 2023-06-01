import { TodoType } from 'service/model/todo';
import {
  CreateTodoActionType,
  SendTodoIdForAllCheckBoxActionType,
  SendTodoIdForEachCheckBoxActionType,
  TodoMarkAsDoneActionType,
  TodoMarkAsNotDoneActionType,
} from './todoAction.interface';
import { TODO_ACTION_CONST } from 'service/const/actionConst';

const {
  CREATE_TODO,
  SEND_ALL_TODO_ID,
  SEND_EACH_TODO_ID,
  SELECT_MARK_AS_DONE,
  SELECT_MARK_AS_NOT_DONE,
} = TODO_ACTION_CONST;

export const createTodoAction = (newTodo: TodoType): CreateTodoActionType => {
  return {
    type: CREATE_TODO,
    payload: newTodo,
  };
};
// export const createTodoAction = (inputCreateTodo: TodoInput) => ({
//   type: 'CREATE_TODO',
//   payload: inputCreateTodo,
// })

export const sendTodoIdForEachCheckBoxAction = (
  todoId: string,
): SendTodoIdForEachCheckBoxActionType => {
  return {
    type: SEND_EACH_TODO_ID,
    payload: todoId,
  };
};

export const sendTodoIdForAllCheckBoxAction = (
  todoIdList: string[],
): SendTodoIdForAllCheckBoxActionType => {
  return {
    type: SEND_ALL_TODO_ID,
    payload: todoIdList,
  };
};

export const todoMarkAsDoneAction = (selectedBoolean: boolean): TodoMarkAsDoneActionType => {
  return {
    type: SELECT_MARK_AS_DONE,
    payload: selectedBoolean,
  };
};

export const todoMarkAsNotDoneAction = (): TodoMarkAsNotDoneActionType => {
  return {
    type: SELECT_MARK_AS_NOT_DONE,
    payload: null,
  };
};
