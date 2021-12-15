import pool from "../database";

export const test = async (req, res) => {
  // res.send("Hello World");
  try {
    const response = await pool.query("SELECT * FROM users");
    res.json(response.rows);
  } catch (error) {
    console.log(error);
  }
};
