import React, { Fragment, useState, useEffect } from "react";

import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    try {
      const response = await fetch("http://localhost:5000/get-todo");

      const data = await response.json();

      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  }

  //delete function

  async function deleteTodo(id) {
    try {
      await fetch(`http://localhost:5000/get-todo/${id}`, { method: "DELETE" });

      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table class="table mt-5">
        <thead>
          <tr>
            <th>todo</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {todos.map(todo => (
            <tr>
              <td>{todo.todo}</td>
              <td>
                <EditTodo todo={todo} key={todo.id} />
              </td>
              <td>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
