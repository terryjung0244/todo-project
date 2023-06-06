import React from 'react';
import { TodoType } from 'service/model/todo';
import {
  sendTodoIdForAllCheckBoxAction,
  sendTodoIdForEachCheckBoxAction,
} from 'service/redux/todoAction';
import { useAppDispatch, useAppSelector } from 'service/store';
import 'components/showTodo/ShowTodo.css';

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList, selectedIdList } = useAppSelector((state) => state.todoReducer);

  const onChangeTodoEachCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; // id 값
    if (value) {
      dispatch(sendTodoIdForEachCheckBoxAction(value));
    }
  };

  // console.log(todoList); // CreateTodo에서 Input을 통해서 이미 배열로 데이터가 들어가있는 상태.

  const onChangeTodoAllCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      const todoIdList: string[] = todoList.map((todo: TodoType) => todo.id);
      dispatch(sendTodoIdForAllCheckBoxAction(todoIdList));
    } else {
      dispatch(sendTodoIdForAllCheckBoxAction([]));
    }
  };

  // console.log('TodoList: ', todoList);
  // console.log('SelectedIdList: ', selectedIdList);

  return (
    <div>
      <div className="todo-container">
        {todoList.length > 0 && (
          <table className="table-container">
            <thead>
              <tr className="th-row">
                <th className="th-checkbox th-">
                  <input
                    type="checkbox"
                    onChange={onChangeTodoAllCheckBox} /*@@@@@@@@@@@@@@@@@@@@@@@@*/
                    checked={selectedIdList.length > 0 ? true : false}
                  />
                </th>
                <th className="th-title th-">Title</th>
                <th className="th-detail th-">Detail</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((todo: TodoType) => {
                return (
                  <tr key={todo.id} className="tb-row">
                    <td className="tb-checkbox td-">
                      <input
                        type="checkbox"
                        value={todo.id} // id 값
                        onChange={onChangeTodoEachCheckBox} /*%%%%%%%%%%%%%%%%%%%%%%%*/
                        checked={selectedIdList.includes(todo.id)}
                        // 2개의 아이디가 들어가있는지 includes을 사용해서 판별해주는 method.
                        // 결국 checked가 2개의 아이디가 들어가있기 때문에, true가 되고 ui상에서 체크박스가 checked로 보인다.
                      />
                    </td>
                    <td
                      className="td-title td-"
                      style={{ textDecoration: todo.isDone ? 'line-through' : 'unset' }}
                    >
                      {todo.title}
                    </td>
                    <td
                      className="td-detail td-"
                      style={{ textDecoration: todo.isDone ? 'line-through' : 'unset' }}
                    >
                      {todo.desc}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ShowTodo;

// const todoList = [
//   {
//     id: 'a',
//     title: 'aa', // hello
//   },
//   {
//     id: 'b',
//     title: 'bb', // world
//   },
// ];

// console.log(todoList);

// console.log(todoList[1].title);

// const newTodo = todoList.map((todo, index) => {
//   return {
//     ...todo,
//     title: index === 0 ? 'hello' : 'world',
//   };
// });

// console.log(newTodo);

/*
 * 숙제
 * userList []
 * {
 *  id
 *  name
 *  email
 * }
 *
 * userList [] => map, filter, forEach, inlcudes, findIndex, splice, indexOf
 *
 * user {}
 *
 * userList => [...userList, property: ''] (x)
 * user => {...user, name: 'aa'} (o)
 */

// bootstrap connect with react
// modal

// interface UserType {
//   id: string;
//   name: string;
//   age?: number;
// }

// const userList: UserType[] = [
//   { id: '1', name: 'Terry' },
//   { id: '2', name: 'Hong' },
// ];

// for (let i = 0; i < userList.length; i++) {
//   console.log(userList[i].name);
// }

// userList.forEach((user: UserType) => {
//   console.log(user.id);
//   console.log(user.name);
// });

// const newUserList: string[] = userList.map((user: UserType) => {
//   return user.name;
// });

// console.log(newUserList);

// ['terry', 'Hong'];

// const newUserList: UserType[] = userList.map((user: UserType) => {
//   console.log(user.id);
//   console.log(user.name);

//   return {
//     ...user,
//     age: 10,
//   };
// });

// console.log(newUserList[0]);
