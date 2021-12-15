import pool from "../database";
import dotenv from "dotenv";
dotenv.config();
export const test = async (req, res) => {
  // res.send("Hello World");
  try {
    const response = await pool.query("SELECT * FROM users");
    // console.log(process.env.USER);
    res.json(response.rows);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};
export const testPost = async (req, res) => {
  // res.send("Hello World");
  const { id } = req.params;
  try {
    const response = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    // console.log(process.env.USER);
    res.json({ message: "User created", data: response.rows, body: id });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};
