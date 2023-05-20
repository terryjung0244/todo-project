import { AnyAction } from '@reduxjs/toolkit';
import { TodoType } from 'service/model/todo';

export interface CreateTodoActionType {
  type: 'CREATE_TODO';
  payload: TodoType;
}

export type TodoActionsType = CreateTodoActionType | AnyAction;
