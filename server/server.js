const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

//import routes

const {
  getTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} = require("./route/todo-routes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Welcome to the home page");
});

app.get("/get-todo", getTodo);
app.get("/get-todo/:id", getTodoById);
app.post("/create-todo", createTodo);
app.put("/get-todo/:id", updateTodo);
app.delete("/get-todo/:id", deleteTodo);

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
