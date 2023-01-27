import { todo as staticTodo } from "../data";

export const getTodosFromLocalStorage = () => {
  try {
    const todo = localStorage.getItem("todos");
    if (todo === null) {
      return staticTodo;
    }
    return JSON.parse(todo);
  } catch (error) {
    return staticTodo;
  }
};

export const saveTodosToLocalStorage = (todos) => {
  try {
    const savedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", savedTodos);
  } catch (error) {
    console.log(error);
  }
};
