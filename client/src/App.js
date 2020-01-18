import React, { Fragment } from "react";
import "./App.css";

//import components

import TodoInput from "./components/TodoInput";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container text-center">
        <h1 className="mt-5">Todo List</h1>
        <TodoInput />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
