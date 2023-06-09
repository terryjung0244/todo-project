/* eslint-disable array-callback-return */
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

// interface UserListType {
//   id: string;
//   name: string;
// }
// // Type은 대문자 시작.

// const userList: UserListType[] = [
//   { id: '1', name: 'Terry' },
//   { id: '2', name: 'Jung' },
// ];

// console.log(userList);

// For문을 돌려서 user의 name을 찍어라

// for (let i = 0; i < userList.length; i++) {
//   console.log(userList[i].name);
// }

// // forEach는 return이
// userList.forEach((user: UserListType) => console.log(user.name));
// userList.forEach((user: UserListType) => {
//   console.log(user.id);
//   console.log(user.name);
// });

// const obj = {
//   a: 'a',
// };

// 위에 {}는 object안에 있는 property : value

// const addSum = () => {};

// 위에는 함수같이 기본틀인 {} 서로 다르다.

// map은 배열을 return 한다.

// const userData: UserListType[] = userList.map((user: UserListType) => {
//   const { name, id } = user; // object는 destructuring.
//   console.log(name);
//   console.log(id);

//   return {
//     ...user, // 수정가능과 불가능?
//     age: 40, // 없으면 새로운 데이터가 추가
//   };
// });

// console.log(userData);
// console.log(userData[1].name); // array일때는 []을 사용해서 원하는 index을 지정해준다.

// map, filter, forEach, includes, findIndex, splice, indexOf

// 숙제

interface UserListType {
  id: string;
  name: string;
}
// Type은 대문자 시작.

const userList: UserListType[] = [
  { id: '1', name: 'Terry' },
  { id: '2', name: 'J' },
];

// filter 패스했을때 새로운 배열을 return 한다.

const result: UserListType[] = userList.filter((user: UserListType) => user.name.length > 2);

console.log(result);

interface AnimalsType {
  species: string;
  name: string;
}

let animals: AnimalsType[] = [
  { species: 'mammalia', name: 'cat' },
  { species: 'reptiles', name: 'lizard' },
  { species: 'amphibia', name: 'flog' },
  { species: 'mammalia', name: 'dog' },
  { species: 'amphibia', name: 'salamander' },
];

// species에 ia라는 string을 포함하고 있는 배열을 return

const animalResult = animals.map((value) => {
  if (value.species.includes('ia') && value.name === 'dog') {
    return {
      ...value,
      age: 10,
    };
  }
});

const newAnimalResult = animalResult.filter((animal) => animal !== undefined);

console.log(newAnimalResult);

let result2 = animals.filter((value) => {
  return value.species === 'amphibia';
});

console.log(result2);

// includes() method checks if an array contains a specified element or not
// const newAnimals: AnimalsType[] = animals.map((animal: AnimalsType) => {
//   if(animal.species.includes('re')) {

//   }
// })

// let result3 = animals.includes({}, 0); // [0]에 'cat'이 있는지 없는지 확인해라
// console.log(result3);

// findIndex

let result4 = animals.findIndex((value) => {
  return value.name === 'flog' && value.species === 'amphibia';
});

let result10: AnimalsType[] = animals.filter((animal: AnimalsType) => {
  if (animal.name.includes('l')) {
    return animal;
  }
});

console.log(result10);

// splice 배열에서 빼는 방법.

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

const result5 = animals.splice(2, 1, { species: 'hello', name: 'yolo' });
console.log(result5);
console.log(animals);

// push pop shift unshift
// let tempArray = ['a', 'b'];

// tempArray.splice(1, 1);
// console.log(tempArray);

// indexOf 특정값을 가지고 있는 요소의 index를 return, 없으면 -1, 대소문자 구분

let tempArray = ['a', 'b', 'c'];
// tempArray.indexOf('d');

const result6 = animals.indexOf({ species: 'mammalia', name: 'cat' });
console.log(result6);

const result8 = animals.findIndex(
  (animal) => animal.species === 'mammalia' && animal.name === 'dog',
);

console.log(result8);
// findIndex vs indexOf
