const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins; modify for production
    methods: ["GET", "POST"]
  }
});

app.use(cors());

app.get("/start-stream", (req, res) => {
  res.json({ message: "Stream started" });
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  
  socket.on("stream-data", (data) => {
    // Broadcast stream data to other clients
    socket.broadcast.emit("stream-data", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(5000, () => {
  console.log("Backend server running on port 5000");
});
