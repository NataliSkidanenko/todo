import {filterTypes} from '../filter/filter-reducer';

export const selectAllTodos = (state) => state.todos;

export const selectVisibleTodos = (state, filter) => {
    switch (filter) {
        case filterTypes.all: {
            return state.todos;
        }

        case filterTypes.active: {
            return state.todos.filter((todo) => !todo.isDone);
        }

        case filterTypes.complited: {
            return state.todos.filter((todo) => todo.isDone);
        }

        default: {
            return state.todos;
        }
    }
};
