import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { todos } from "./todo/todo-reducer";
import { filter } from "./filter/filter-reducer";
import { saveTodosToLocalStorage } from "./locale-storage";

const rootReducer = combineReducers({ todos, filter });
export const store = configureStore({
  reducer: rootReducer
});

store.subscribe(() => {
  saveTodosToLocalStorage(store.getState().todos);
  console.log(localStorage.getItem("todos"));
});
