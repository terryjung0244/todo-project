import { Reducer } from 'redux';
import { TodoReducerState } from 'service/redux/todoReducer.interface';
import { TodoActionsType } from 'service/redux/todoAction.interface';
import { TODO_ACTION_CONST } from 'service/const/actionConst';
import { TodoType } from 'service/model/todo';

const {
  CREATE_TODO,
  SEND_ALL_TODO_ID,
  SEND_EACH_TODO_ID,
  SELECT_MARK_AS_DONE,
  SELECT_MARK_AS_NOT_DONE,
  SELECT_DELETE,
} = TODO_ACTION_CONST;
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
      const tempTodoListForMarkAsDone = [...state.todoList];
      console.log(tempTodoListForMarkAsDone); // 그대로 가져오고,

      const tempSelectedIdListForSelectMarkAsDone = [...state.selectedIdList];
      console.log(tempSelectedIdListForSelectMarkAsDone); // 선택한 id

      const tempForMarkAsDone = tempTodoListForMarkAsDone.map((todo: TodoType) => {
        console.log(tempSelectedIdListForSelectMarkAsDone.includes(todo.id)); // 선택한 id가 포함이니까 true.
        return {
          ...todo,
          isDone: tempSelectedIdListForSelectMarkAsDone.includes(todo.id) ? true : false,
        };
      });

      return {
        ...state,
        todoList: tempForMarkAsDone, //바뀐 값을 todoList에 넣어라
      };
    case SELECT_MARK_AS_NOT_DONE:
      const tempTodoListForMarkAsNotDone = [...state.todoList]; // 1
      console.log(tempTodoListForMarkAsNotDone);

      const tempSelectedIdListForSelectMarkNotAsDone = [...state.selectedIdList]; // 2
      console.log(tempSelectedIdListForSelectMarkNotAsDone);

      const tempForMarkAsNotDone = tempTodoListForMarkAsNotDone.map((todo: TodoType) => {
        return {
          ...todo,
          isDone: tempSelectedIdListForSelectMarkNotAsDone.includes(todo.id) ? false : true,
        };
      });

      return {
        ...state,
        todoList: tempForMarkAsNotDone,
      };

    case SELECT_DELETE:
      const tempTodoListForDelete = [...state.todoList];
      const tempSelectedIdListForDelete = [...state.selectedIdList];

      tempSelectedIdListForDelete.forEach((id: string) => {
        let index = tempTodoListForDelete.findIndex((todo: TodoType) => todo.id === id);
        tempTodoListForDelete.splice(index, 1);
      });

      // const newTodo = tempTodoListForDelete.filter(
      //   (todo: TodoType) => !tempSelectedIdListForDelete.includes(todo.id),
      // );

      console.log(tempTodoListForDelete);

      return {
        ...state,
        todoList: tempTodoListForDelete,
        selectedIdList: [],
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
// const initial = {
//   a: [],
//   b: {},
// };

// const data = [...initial.a]
// const data1 = {...initial.b}

// const data2 = {
//   ...initial,
//   a: ['1']
// }
