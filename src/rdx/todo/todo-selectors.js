export const selectAllTodos = (state) => state.todos;

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case "all": {
      return state.todos;
    }

    case "active": {
      return state.todos.filter((todo) => !todo.isDone);
    }

    case "complited": {
      return state.todos.filter((todo) => todo.isDone);
    }

    default: {
      return state.todos;
    }
  }
};
