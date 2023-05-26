import { Reducer } from 'redux';
import { TodoReducerState } from 'service/redux/todoReducer.interface';
import { TodoActionsType } from 'service/redux/todoAction.interface';

const initialState: TodoReducerState = {
  todoList: [],
  selectedIdList: [],
};

const todoReducer: Reducer<TodoReducerState, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType,
): TodoReducerState => {
  switch (action.type) {
    case 'CREATE_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case 'SEND_EACH_TODO_ID':
      console.log(action.payload);
      // action.payload => todo id
      const tempSelectedIdList = [...state.selectedIdList];
      const index = tempSelectedIdList.indexOf(action.payload);

      if (index === -1) {
        tempSelectedIdList.push(action.payload);
      } else {
        tempSelectedIdList.splice(index, 1);
      }

      return {
        ...state,
        selectedIdList: tempSelectedIdList,
      };
    case 'SEND_ALL_TODO_ID':
      return {
        ...state,
        selectedIdList: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;

// const stringList: string[] = ['a', 'b', 'c'];

// const index = stringList.indexOf('b');

// if (index === -1) {
//   stringList.push('d');
// } else {
//   stringList.splice(index, 1)
// }
