import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

export var pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  password: "",
  database: process.env.DATABASE,
  port: 5432,
});

export default pool;
