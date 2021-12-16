import pool from "../database";
import dotenv from "dotenv";
import { response } from "express";
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

export const getAllTasks = async (req, res) => {
  // res.send("Hello from tasks");
  try {
    const result = await pool.query("SELECT * FROM tasks");
    console.log(result);
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  // res.send("Hello from tasks");
  try {
    const result = await pool.query("SELECT NOW()");
    console.log(result);
    res.json(result.rows[0].now);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  // res.send("Hello from tasks");
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    console.log(result);
    res.json(response.rows[0]);
  } catch (error) {
    console.log(error);
    res.json({ Error: error.message });
  }
};

export const udpateTask = async (req, res) => {
  // res.send("Hello from tasks");
  try {
    const result = await pool.query("SELECT NOW()");
    console.log(result);
    res.json(result.rows[0].now);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

export const deeleteTask = async (req, res) => {
  // res.send("Hello from tasks");
  try {
    const result = await pool.query("SELECT NOW()");
    console.log(result);
    res.json(result.rows[0].now);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};
