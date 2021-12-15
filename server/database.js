import { Pool } from "pg";

export var pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "",
  database: "first_pern_database",
  port: 5432,
});
