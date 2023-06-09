import { TodoType } from 'service/model/todo';
import {
  CreateTodoActionType,
  SendTodoIdForAllCheckBoxActionType,
  SendTodoIdForEachCheckBoxActionType,
  TodoDeleteType,
  TodoMarkAsDoneActionType,
  TodoMarkAsNotDoneActionType,
  TodoUpdateType,
} from './todoAction.interface';
import { TODO_ACTION_CONST } from 'service/const/actionConst';

const {
  CREATE_TODO,
  SEND_ALL_TODO_ID,
  SEND_EACH_TODO_ID,
  SELECT_MARK_AS_DONE,
  SELECT_MARK_AS_NOT_DONE,
  SELECT_DELETE,
  SELECT_UPDATE,
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

export const todoMarkAsDoneAction = (): TodoMarkAsDoneActionType => {
  return {
    type: SELECT_MARK_AS_DONE,
  };
};

export const todoMarkAsNotDoneAction = (): TodoMarkAsNotDoneActionType => {
  return {
    type: SELECT_MARK_AS_NOT_DONE,
  };
};

export const todoDeleteAction = (): TodoDeleteType => {
  return {
    type: SELECT_DELETE,
  };
};

export const todoUpdateAction = (updateTodoInput: Partial<TodoType>): TodoUpdateType => {
  return {
    type: SELECT_UPDATE,
    payload: updateTodoInput,
  };
};
