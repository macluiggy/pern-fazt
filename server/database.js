import { Pool } from "pg";
import dotenv from "dotenv";

export var pool = new Pool({
  user: process.env.USER || "postgres",
  host: process.env.HOST || "localhost",
  password: "",
  database: process.env.DATABASE || "tasks_pern",
  port: 5432,
});

export default pool;
