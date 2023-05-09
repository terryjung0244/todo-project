import { Reducer } from 'redux';
import { TodoReducerState } from 'service/redux/todoReducer.interface';
import { TodoActionsType } from 'service/redux/todoAction.interface';

const initialState: TodoReducerState = {
  todoList: [],
};

const todoReducer: Reducer<TodoReducerState, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType,
): TodoReducerState => {
  switch (action.type) {
    case 'CREATE_TODO':
      // draft.todoList.push(action.payload);
      // draft.todoList = [...draft.todoList, action.payload];

      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
    default:
      return state;
  }
};

export default todoReducer;
