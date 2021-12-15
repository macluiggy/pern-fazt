import path from "path";
import express from "express";
import { MongoClient } from "mongodb";
import template from "./../template";
//comment out before building for production
import devBundle from "./devBundle";
import dotenv from "dotenv";
dotenv.config();
// routes
import indexRoutes from "./routes/index.route";

const app = express();
//comment out before building for production
devBundle.compile(app);
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
app.use(indexRoutes);

let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});

// Database Connection URL
// const url =
//   process.env.MONGODB_URI || "mongodb://localhost:27017/mernSimpleSetup";
// // Use connect method to connect to the server
// MongoClient.connect(
//   url,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, db) => {
//     console.log("Connected successfully to mongodb server");
//     db.close();
//   }
// );
export default app;
