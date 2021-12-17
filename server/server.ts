import path from "path";
import express from "express";
import morgan from "morgan";
// import cors from "cors";
// import { MongoClient } from "mongodb";
import template from "../template.js";
//comment out before building for production
// import devBundle from "./devBundle";
import dotenv from "dotenv";
dotenv.config();

// routes
import indexRoutes from "./routes/index.route";
import taskRoutes from "./routes/task.routes";

const app = express();
//comment out before building for production
// devBundle.compile(app);
const CURRENT_WORKING_DIR = process.cwd(); //
let dir = path.join(CURRENT_WORKING_DIR, "dist");
console.log(dir);
app.use("/dist", express.static(dir));
// app.get('/', function(req, res) {
//   res.sendFile(dir);
// })
app.get("/", (req, res) => {
  res.status(200).send(template());
});

app.get("/api/hello", (_, res) => {
  res.json({ hello: "world, jajjaddd" });
});

// middlewares
app.use(express.json());
app.use(morgan("dev"));
// app.use(cors());
app.use((err, req, res, next) => {
  return res.status(500).json({ message: err.message });
});

//using routes
app.use("/api", indexRoutes);
app.use("/api", taskRoutes);

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info("Server started on port %s.", port);
});

export default app;
