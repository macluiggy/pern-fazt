import pool from "../database";
import dotenv from "dotenv";
dotenv.config();
export const test = async (req, res) => {
  // res.send("Hello World");
  try {
    const response = await pool.query("SELECT * FROM users");
    console.log(process.env.USER);
    res.json(response.rows);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};
