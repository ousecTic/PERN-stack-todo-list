//set up the configuration of your Postgresql connection

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todo",
  password: "",
  port: 5432
});

module.exports = pool;
