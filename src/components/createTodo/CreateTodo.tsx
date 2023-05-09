import React, { useState } from 'react'
import { createTodoAction } from 'service/redux/todoAction';
import { useAppSelector, useAppDispatch } from 'service/store'
import { getNanoid } from 'service/util/nanoid';

export interface TodoInput {
  title: string;
  desc: string;
}

const CreateTodo = () => {

  const dispatch = useAppDispatch()
  // const { todoList } = useAppSelector((state) => state.todoReducer)
  
  const [inputCreateTodo, setInputCreateTodo] = useState<TodoInput>({
    title: '',
    desc: ''
  })

  const onChangeCreateTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    setInputCreateTodo({ ...inputCreateTodo, [e.target.name]: e.target.value })
    // setInputCreateTodo(e.target.value)
  }

  const onClickCreateTodo = () => {
    const { title, desc } = inputCreateTodo
    if(!title || !desc) {
      alert('Fill in both fields');
      return;
    }
    dispatch(createTodoAction({
      ...inputCreateTodo,
      id: getNanoid()
    }))
  }

  return (
    <div>
      <input
        placeholder='Create Todo Title'
        name='title'
        value={inputCreateTodo.title} //변동
        onChange={onChangeCreateTodo}
      />
      <input
        placeholder='Create Todo Desc'
        name='desc'
        value={inputCreateTodo.desc} //변동
        onChange={onChangeCreateTodo}
      />
      {/* <button onClick={() => onClickCreateTodo(inputCreateTodo)}>Click</button> */}
      <button onClick={onClickCreateTodo}>Click</button>
    </div>
  )
}

export default CreateTodo
