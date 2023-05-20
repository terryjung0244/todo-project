import React, { useState } from 'react';
import {
  createTodoAction,
  sendTodoIdForAllCheckBoxAction,
  sendTodoIdForEachCheckBoxAction,
} from 'service/redux/todoAction';
import { useAppSelector, useAppDispatch } from 'service/store';
import { getNanoid } from 'service/util/nanoid';
import '../createTodo/CreateTodo.css';
import { TodoType } from 'service/model/todo';

export interface TodoInput {
  title: string;
  desc: string;
}

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList, selectedIdList } = useAppSelector((state) => state.todoReducer);

  const [inputCreateTodo, setInputCreateTodo] = useState<TodoInput>({
    title: '',
    desc: '',
  });

  const onChangeCreateTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    setInputCreateTodo({ ...inputCreateTodo, [e.target.name]: e.target.value });
    // setInputCreateTodo(e.target.value)
  };

  const onClickCreateTodo = () => {
    const { title, desc } = inputCreateTodo;
    if (!title || !desc) {
      alert('Fill in both fields');
      return;
    }
    dispatch(
      createTodoAction({
        ...inputCreateTodo,
        id: getNanoid(),
      }),
    );
    setInputCreateTodo({ ...inputCreateTodo, title: '', desc: '' });
  };

  const onChangeTodoEachCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) {
      dispatch(sendTodoIdForEachCheckBoxAction(value));
    }
  };

  const onChangeTodoAllCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      const todoIdList: string[] = todoList.map((todo: TodoType) => {
        return todo.id;
      });
      dispatch(sendTodoIdForAllCheckBoxAction(todoIdList));
    } else {
      dispatch(sendTodoIdForAllCheckBoxAction([]));
    }
  };

  // console.log(todoList);
  console.log(selectedIdList);

  return (
    <div className="main-container">
      <div className="input-main-container">
        <input
          className="input-container"
          placeholder="Create Todo Title"
          name="title"
          value={inputCreateTodo.title} //변동
          onChange={onChangeCreateTodo}
        />
        <input
          className="input-container"
          placeholder="Create Todo Desc"
          name="desc"
          value={inputCreateTodo.desc} //변동
          onChange={onChangeCreateTodo}
        />
        {/* <button onClick={() => onClickCreateTodo(inputCreateTodo)}>Click</button> */}
        <button className="button-container" onClick={onClickCreateTodo}>
          Create
        </button>
      </div>

      <div className="todo-container">
        {todoList.length > 0 && (
          <table className="table-container">
            <thead>
              <tr className="th-row">
                <th className="th-checkbox">
                  <input type="checkbox" onChange={onChangeTodoAllCheckBox} />
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
                        value={todo.id}
                        onChange={onChangeTodoEachCheckBox}
                        checked={selectedIdList.includes(todo.id)}
                      />
                    </td>
                    <td className="td-title">{todo.title}</td>
                    <td className="td-detail">{todo.desc}</td>
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

export default CreateTodo;

/**
 * <table>
 *   <thead>
 *    <tr>
 *     <th>A</th>
 *     <th>B</th>
 *    </tr>
 *   </thead>
 *   <tbody>
 *    <tr>
 *     <td>A</td>
 *     <td>B</td>
 *    </tr>
 *   </tbody>
 * </table>
 */
