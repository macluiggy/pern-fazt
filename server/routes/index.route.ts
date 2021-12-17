import { Router } from "express";
const router = Router();
import { getUsers } from "../controllers/index.controller";

router.route("/users").get(getUsers).post();

export default router;
