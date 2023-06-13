import { produce } from 'immer';
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
  SELECT_UPDATE,
} = TODO_ACTION_CONST;

const initialState: TodoReducerState = {
  todoList: [],
  selectedIdList: [],
};

const todoReducer: Reducer<TodoReducerState, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType,
): TodoReducerState => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CREATE_TODO:
        draft.todoList.push(action.payload);
        break;
      case SEND_EACH_TODO_ID:
        // const tempSelectedIdList = [...state.selectedIdList];

        const index = draft.selectedIdList.indexOf(action.payload);

        if (index === -1) {
          draft.selectedIdList.push(action.payload);
        } else {
          draft.selectedIdList.splice(index, 1);
        }

        // return {
        //   ...state,
        //   selectedIdList: draft.selectedIdList,
        // };
        break;
      case SEND_ALL_TODO_ID:
        draft.selectedIdList.push(action.payload);
        // return {
        //   ...state,
        //   selectedIdList: action.payload,
        // };
        break;
      case SELECT_MARK_AS_DONE:
        // const tempTodoListForMarkAsDone = [...state.todoList];
        // console.log(tempTodoListForMarkAsDone); // 그대로 가져오고,

        // const tempSelectedIdListForSelectMarkAsDone = [...state.selectedIdList];
        // console.log(tempSelectedIdListForSelectMarkAsDone); // 선택한 id

        const tempForMarkAsDone = draft.todoList.map((todo: TodoType) => {
          if (draft.selectedIdList.includes(todo.id)) {
            return { ...todo, isDone: true };
          } else {
            return { ...todo };
          }
          // draft.todoList.push(isDone: draft.selectedIdList.includes(todo.id) ? {} : {})
          // return {
          //   ...todo,
          //   isDone: draft.selectedIdList.includes(todo.id) ? true : false,
          // };
        });

        draft.todoList = tempForMarkAsDone;

        // return {
        //   ...state,
        //   todoList: tempForMarkAsDone, //바뀐 값을 todoList에 넣어라
        // };
        break;
      case SELECT_MARK_AS_NOT_DONE:
        // const tempTodoListForMarkAsNotDone = [...state.todoList]; // 1
        // console.log(tempTodoListForMarkAsNotDone);

        // const tempSelectedIdListForSelectMarkNotAsDone = [...state.selectedIdList]; // 2
        // console.log(tempSelectedIdListForSelectMarkNotAsDone);

        // const tempForMarkAsNotDone = tempTodoListForMarkAsNotDone.map((todo: TodoType) => {
        //   return {
        //     ...todo,
        //     isDone: tempSelectedIdListForSelectMarkNotAsDone.includes(todo.id) ? false : true,
        //   };
        // });

        // return {
        //   ...state,
        //   todoList: tempForMarkAsNotDone,
        // };
        const tempForMarkAsNotDone = draft.todoList.map((todo: TodoType) => {
          return {
            ...todo,
            isDone: draft.selectedIdList.includes(todo.id) ? false : true,
          };
        });
        draft.todoList = tempForMarkAsNotDone;
        break;
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

      case SELECT_UPDATE:
        const { title, desc, id } = action.payload;

        const updateIndex: number = draft.todoList.findIndex((todo: TodoType) => todo.id === id);
        draft.todoList[updateIndex].title = title;
        draft.todoList[updateIndex].desc = desc;
        draft.selectedIdList = [];
        break;
      // let tempTodoListForUpdate = [...state.todoList];
      // const updateIndex: number = tempTodoListForUpdate.findIndex(
      //   (todo: TodoType) => todo.id === id,
      // );
      // console.log(updateIndex);
      // console.log(tempTodoListForUpdate);
      // tempTodoListForUpdate[updateIndex].title = title;
      // tempTodoListForUpdate[updateIndex].desc = desc;

      // return {
      //   ...state,
      //   // todoList: tempTodoListForUpdate,
      // };
      default:
        return state;
    }
  });
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

// let selectedIdList: string[] = ['2'];
// let todos: TodoType[] = [
//   {
//     id: '1',
//     title: 'A',
//     desc: 'a',
//     isDone: false,
//   },
//   {
//     id: '2',
//     title: 'B',
//     desc: 'b',
//     isDone: false,
//   },
//   {
//     id: '3',
//     title: 'C',
//     desc: 'c',
//     isDone: false,
//   },
// ];

// const newTodos = todos.map((todo: TodoType) => {
//   // console.log(todo);
//   return { ...todo };
// });
// console.log(newTodos);

// interface IUser {
//   id: string;
//   name: string;
//   age: number;
//   hobby?: string;
// }
// let userList: IUser[] = [
//   {
//     id: '1',
//     name: 'hong',
//     age: 33,
//   },
//   {
//     id: '2',
//     name: 'terry',
//     age: 33,
//   },
// ];

// const result: IUser[] = userList.map((user: IUser) => {
//   if (user.name.includes('h')) {
//     return {
//       ...user,
//       age: 50,
//       hobby: 'coding',
//     };
//   } else {
//     return {
//       ...user,
//     };
//   }

//   // } else {
//   // }

//   // return {
//   //   ...user,
//   //   age: 35,
//   // };
// });

// console.log(result[0].hobby);
