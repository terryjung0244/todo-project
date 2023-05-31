import { AnyAction } from '@reduxjs/toolkit';
import { TodoType } from 'service/model/todo';
import { TODO_ACTION_CONST } from 'service/const/actionConst';

const { CREATE_TODO, SEND_ALL_TODO_ID, SEND_EACH_TODO_ID } = TODO_ACTION_CONST;

export interface CreateTodoActionType {
  type: typeof CREATE_TODO;
  payload: TodoType;
}

export interface SendTodoIdForAllCheckBoxActionType {
  type: typeof SEND_ALL_TODO_ID;
  payload: string[];
}

export interface SendTodoIdForEachCheckBoxActionType {
  type: typeof SEND_EACH_TODO_ID;
  payload: string;
}

export type TodoActionsType =
  | CreateTodoActionType
  | SendTodoIdForAllCheckBoxActionType
  | SendTodoIdForEachCheckBoxActionType
  | AnyAction;
