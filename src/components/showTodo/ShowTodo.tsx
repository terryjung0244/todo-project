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

  console.log(todoList); // CreateTodo에서 Input을 통해서 이미 배열로 데이터가 들어가있는 상태.

  const onChangeTodoAllCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      const todoIdList: string[] = todoList.map((todo: TodoType) => todo.id);
      console.log(todoIdList);
      dispatch(sendTodoIdForAllCheckBoxAction(todoIdList));
    } else {
      dispatch(sendTodoIdForAllCheckBoxAction([]));
    }
  };

  console.log('TodoList: ', todoList);
  console.log('SelectedIdList: ', selectedIdList);

  return (
    <div>
      <div className="todo-container">
        {todoList.length > 0 && (
          <table className="table-container">
            <thead>
              <tr className="th-row">
                <th className="th-checkbox">
                  <input
                    type="checkbox"
                    onChange={onChangeTodoAllCheckBox} /*@@@@@@@@@@@@@@@@@@@@@@@@*/
                    checked={selectedIdList.length > 0 ? true : false}
                  />
                </th>
                <th className="th-title">Title</th>
                <th className="th-detail">Detail</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((todo: TodoType) => {
                return (
                  <tr key={todo.id} className="tb-row">
                    <td className="tb-checkbox">
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
                      className="td-title"
                      style={{ textDecoration: todo.isDone ? 'line-through' : 'unset' }}
                    >
                      {todo.title}
                    </td>
                    <td
                      className="td-detail"
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
