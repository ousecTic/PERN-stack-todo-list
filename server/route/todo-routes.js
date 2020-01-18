const pool = require("../queries");

const getTodo = (req, res) => {
  pool.query("SELECT * FROM todos ORDER BY id ASC", (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  });
};

const getTodoById = (req, res) => {
  let id = req.params.id;

  pool.query("SELECT * FROM todos WHERE id = $1", [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

const createTodo = (req, res) => {
  const { todo } = req.body;
  pool.query("INSERT INTO todos (todo) VALUES ($1)", [todo], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.status(201).json("Todo was created!");
  });
};

const updateTodo = (req, res) => {
  const { todo } = req.body;
  const id = req.params.id;
  pool.query(
    "UPDATE todos SET todo = $1 WHERE id = $2",
    [todo, id],
    (err, result) => {
      if (err) throw err;
      res.status(200).json(`Todo with id ${id} has been updated!`);
    }
  );
};

const deleteTodo = (req, res) => {
  const id = req.params.id;
  pool.query("DELETE FROM todos WHERE id = $1", [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(`User with id ${id} has been deleted`);
  });
};

module.exports = {
  getTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};
