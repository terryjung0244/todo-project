import { TodoType } from 'service/model/todo';
import { CreateTodoActionType } from './todoAction.interface';

export const createTodoAction = (newTodo: TodoType): CreateTodoActionType => {
  return {
    type: 'CREATE_TODO',
    payload: newTodo,
  };
};
// export const createTodoAction = (inputCreateTodo: TodoInput) => ({
//   type: 'CREATE_TODO',
//   payload: inputCreateTodo,
// })

export const sendTodoIdForEachCheckBoxAction = (todoId: string) => {
  return {
    type: 'SEND_EACH_TODO_ID',
    payload: todoId,
  };
};

export const sendTodoIdForAllCheckBoxAction = (todoIdList: string[]) => {
  return {
    type: 'SEND_ALL_TODO_ID',
    payload: todoIdList,
  };
};
