import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../rdx/todo/todo-actions";

export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.task.value));
    e.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        name="task"
        placeholder="Enter your new task"
      />
      <button className="add-button">Add a new task</button>
    </form>
  );
}
