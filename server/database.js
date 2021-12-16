// import { Pool } from "pg";
// import dotenv from "dotenv";
// dotenv.config();

// // export var pool = new Pool({
// //   connectionString:
// //     "postgres://ersacuizzxfjfn:fb05ad5f0bffa54fc5087ee645c13a3069165f71236be4f14f0761acd18054ae@ec2-3-220-240-189.compute-1.amazonaws.com:5432/d2le5gil7i6cmj",
// //   user: "ersacuizzxfjfn",
// //   host: "ec2-3-220-240-189.compute-1.amazonaws.com",
// //   password: "fb05ad5f0bffa54fc5087ee645c13a3069165f71236be4f14f0761acd18054ae",
// //   database: "d2le5gil7i6cmj",
// //   port: 5432,
// //   sll: true,
// // });
// const pool = new Pool({
//   connectionString:
//     "postgres://ersacuizzxfjfn:fb05ad5f0bffa54fc5087ee645c13a3069165f71236be4f14f0761acd18054ae@ec2-3-220-240-189.compute-1.amazonaws.com:5432/d2le5gil7i6cmj",
//   sll: {
//     rejectUnauthorized: false,
//   },
// });
// // let obj = {
// //   production: {
// //     client: "pg",
// //     connection:
// //       "postgres://ersacuizzxfjfn:fb05ad5f0bffa54fc5087ee645c13a3069165f71236be4f14f0761acd18054ae@ec2-3-220-240-189.compute-1.amazonaws.com:5432/d2le5gil7i6cmj",
// //     pool: {
// //       min: 2,
// //       max: 10,
// //     },
// //     migrations: {
// //       tablename: "users",
// //       directory: "./migrations",
// //     },
// //   },
// // };
// // export var pool = new Pool({
// //   user: "postgres",
// //   host: "localhost",
// //   password: "",
// //   database: "tasks_pern",
// //   port: 5432,
// // });
// export default pool;

const Pool = require("pg").Pool;
require("dotenv").config();
// const isProduction = process.env.NODE_ENV === "production";
// const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
// const pool = new Pool({
//   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

var pool = new Pool({
  connectionString:
    "postgres://ersacuizzxfjfn:fb05ad5f0bffa54fc5087ee645c13a3069165f71236be4f14f0761acd18054ae@ec2-3-220-240-189.compute-1.amazonaws.com:5432/d2le5gil7i6cmj",
  ssl: {
    rejectUnauthorized: false,
  },
});
module.exports = pool;
