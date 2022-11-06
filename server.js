import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const server = app.listen(process.env.SERVER_PORT);
app.use(express.static("public"));

console.log("Server running on port " + process.env.SERVER_PORT);
