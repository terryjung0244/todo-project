import { Reducer } from 'redux';
import { TodoReducerState } from 'service/redux/todoReducer.interface';
import { TodoActionsType } from 'service/redux/todoAction.interface';
import { TODO_ACTION_CONST } from 'service/const/actionConst';
import { TodoType } from 'service/model/todo';

const { CREATE_TODO, SEND_ALL_TODO_ID, SEND_EACH_TODO_ID, SELECT_MARK_AS_DONE } = TODO_ACTION_CONST;
const initialState: TodoReducerState = {
  todoList: [],
  selectedIdList: [],
};

const todoReducer: Reducer<TodoReducerState, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType,
): TodoReducerState => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case SEND_EACH_TODO_ID:
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
    case SEND_ALL_TODO_ID:
      return {
        ...state,
        selectedIdList: action.payload,
      };
    case SELECT_MARK_AS_DONE:
      const tempTodoList = [...state.todoList];
      const tempSelectedIdListA = [...state.selectedIdList];

      const temp = tempTodoList.map((todo: TodoType) => {
        return { ...todo, isDone: action.payload };
      });

      return {
        ...state,
        todoList: temp,
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
