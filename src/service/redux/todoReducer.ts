import { Reducer } from 'redux';
import { TodoReducerState } from 'service/redux/todoReducer.interface';
import { TodoActionsType } from 'service/redux/todoAction.interface';

const initialState: TodoReducerState = {
 
};

const todoReducer: Reducer<TodoReducerState, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType,
): TodoReducerState => {
  switch (action.type) {
    
    default:
      return state;
  }
};

export default todoReducer;
