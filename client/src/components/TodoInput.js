import React, { useState } from "react";

const TodoInput = () => {
  const [text, setText] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const newText = { todo: text };
      await fetch("http://localhost:5000/create-todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newText)
      });

      window.location = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="enter todo ..."
        className="form-control"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="btn btn-primary">submit</button>
    </form>
  );
};

export default TodoInput;
