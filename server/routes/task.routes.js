import { Router } from "express";
const router = Router();
import { test } from "../controllers/task.controller";
router.route("/").get(test);

export default router;
