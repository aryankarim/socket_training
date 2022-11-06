import express from "express";

const PORT = 3000;

const app = express();

const server = app.listen(PORT);

app.use(express.static("public"));

console.log("Server running on port " + PORT);
