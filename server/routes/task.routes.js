import { Router } from "express";
const router = Router();
import { test, testPost } from "../controllers/task.controller";
router.route("/").get(test);
router.route("/:id").get(testPost);

export default router;
