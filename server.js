import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const server = app.listen(process.env.SERVER_PORT);
app.use(express.static("public"));

console.log("Server running on http://127.0.0.1:" + process.env.SERVER_PORT);

import { Server } from "socket.io";
const io = new Server(server);

io.sockets.on("connection", function (socket) {
  console.log("We have a new client: " + socket.id);

  socket.on("mouse", function (data) {
    socket.broadcast.emit("mouse", data);
  });
});
