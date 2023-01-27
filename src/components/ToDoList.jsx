import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../rdx/filter/filter-selectors";
import { removeTodo, toggleTodo } from "../rdx/todo/todo-actions";
import { selectVisibleTodos } from "../rdx/todo/todo-selectors";
import Filters from "./Filters";

export default function ToDoList() {
  const filter = useSelector(selectFilter);
  const todo = useSelector((state) => selectVisibleTodos(state, filter));
  const dispatch = useDispatch();
  const list = useRef();

  const scrollDown = () => {
    list.current.scrollTop = list.current.scrollHeight;
  };

  return (
    <>
      <Filters />
      {todo.length > 0 && (
        <ul ref={list} className="list">
          {todo.map(({ id, title, isDone }) => (
            <li
              onClick={() => dispatch(toggleTodo(id))}
              className={`task ${isDone ? "done" : ""}`}
              key={id}
            >
              <p>{title}</p>
              <svg
                onClick={() => dispatch(removeTodo(id))}
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41421 6.5L11.7071 10.7929C12.0976 11.1834 12.0976 11.8166 11.7071 12.2071C11.3166 12.5976 10.6834 12.5976 10.2929 12.2071L6 7.91421L1.70711 12.2071C1.31658 12.5976 0.683418 12.5976 0.292893 12.2071C-0.0976311 11.8166 -0.0976311 11.1834 0.292893 10.7929L4.58579 6.5L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L7.41421 6.5Z"
                  fill="#BDBDBD"
                />
              </svg>
            </li>
          ))}
          {todo.length >= 5 && (
            <button className="scroll" onClick={scrollDown}>
              Scroll down
            </button>
          )}
        </ul>
      )}
    </>
  );
}
