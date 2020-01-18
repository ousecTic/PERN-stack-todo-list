import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [text, setText] = useState(todo.todo);

  async function updateTodo(e) {
    e.preventDefault();
    try {
      let newText = { todo: text };
      await fetch(`http://localhost:5000/get-todo/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newText)
      });

      window.location = "/";
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#${todo.todo}`}
      >
        Edit
      </button>

      <div class="modal" id={todo.todo} onClick={() => setText(todo.todo)}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setText(todo.todo)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={text}
                onChange={e => setText(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={updateTodo}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setText(todo.todo)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
