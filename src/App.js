import React from "react";
import "./styles.css";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <h1 className="title">Need to do</h1>
          <ToDoList />
          <Form />
        </div>
      </div>
    </div>
  );
}
