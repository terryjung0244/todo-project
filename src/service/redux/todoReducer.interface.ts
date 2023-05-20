import { TodoType } from 'service/model/todo';

export interface TodoReducerState {
  todoList: TodoType[];
  selectedIdList: string[];
}
