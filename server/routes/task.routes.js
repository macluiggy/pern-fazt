import { Router } from "express";
const router = Router();
import { test } from "../controllers/task.controller";

router.route("/").get(test);
router.route("/tasks").get((req, res) => {
  res.send("Hello from tasks");
});

router.route("/tasks/:id");

export default router;
