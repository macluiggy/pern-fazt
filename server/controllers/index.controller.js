import { pool } from "../database";

export const getUsers = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM users");
    // console.log(response);
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};
