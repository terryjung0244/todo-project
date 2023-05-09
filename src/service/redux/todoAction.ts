import { TodoType } from "service/model/todo"

export const createTodoAction = (newTodo: TodoType) => {
  return {
    type: 'CREATE_TODO', 
    payload: newTodo,
  }
}
// export const createTodoAction = (inputCreateTodo: TodoInput) => ({
//   type: 'CREATE_TODO', 
//   payload: inputCreateTodo,
// })