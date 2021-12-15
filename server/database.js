import { Pool } from "pg";
import dotenv from "dotenv";
export var pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "",
  database: "tasks_pern",
  port: 5432,
});

export default pool;
