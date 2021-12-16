import { Router } from "express";
const router = Router();
import { test } from "../controllers/task.controller";
import {
  getAllTasks,
  createTask,
  getTask,
  udpateTask,
  deeleteTask,
} from "../controllers/task.controller";

router.route("/").get(test);
router.route("/tasks").get(getAllTasks).post(createTask);

router.route("/tasks/:id");

export default router;
