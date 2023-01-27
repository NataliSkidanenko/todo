import { getTodosFromLocalStorage } from "../locale-storage";

const preloadedTodos = getTodosFromLocalStorage();

export const todos = (state = preloadedTodos, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, { id: Date.now(), title: action.title, isDone: false }];
    }

    case "REMOVE_TODO": {
      return state.filter((todo) => todo.id !== action.id);
    }

    case "TOGGLE_TODO": {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    }

    default: {
      return state;
    }
  }
};
