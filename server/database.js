import { Pool } from "pg";

export var pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "",
  database: "tasks_pern",
  port: 5432,
});

export default pool;
