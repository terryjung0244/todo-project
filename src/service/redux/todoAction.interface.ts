import { AnyAction } from '@reduxjs/toolkit';
import { TodoType } from 'service/model/todo';
import { TODO_ACTION_CONST } from 'service/const/actionConst';

const {
  CREATE_TODO,
  SEND_ALL_TODO_ID,
  SEND_EACH_TODO_ID,
  SELECT_MARK_AS_DONE,
  SELECT_MARK_AS_NOT_DONE,
  SELECT_DELETE,
} = TODO_ACTION_CONST;

export interface CreateTodoActionType {
  // 대문자 주의
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

export interface TodoMarkAsDoneActionType {
  type: typeof SELECT_MARK_AS_DONE;
  payload?: null;
}

export interface TodoMarkAsNotDoneActionType {
  type: typeof SELECT_MARK_AS_NOT_DONE;
  payload?: null;
}

export interface TodoDeleteType {
  type: typeof SELECT_DELETE;
  payload?: null;
}

export type TodoActionsType =
  | CreateTodoActionType
  | SendTodoIdForAllCheckBoxActionType
  | SendTodoIdForEachCheckBoxActionType
  | TodoMarkAsDoneActionType
  | TodoMarkAsNotDoneActionType
  | TodoDeleteType
  | AnyAction;
