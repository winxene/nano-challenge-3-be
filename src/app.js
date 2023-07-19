const express = require("express");
const app = express();
const http = require("http");
const socketIO = require("socket.io");
const server = http.Server(app);
const io = socketIO(server);

// Socket.io event handlers
const reportHandler = require("./socket/handlers/reportHandler"); //delete this line
const notificationHandler = require("./socket/handlers/notificationHandler");

// RESTful API routes
const userDetailRoutes = require("./api/routes/userDetails");
const adminDetailRoutes = require("./api/routes/adminDetails");

// Middleware
app.use(express.json());

// RESTful API routes
app.use("/user-detail", userDetailRoutes);
app.use("/admin-detail", adminDetailRoutes);

// Socket.io configuration and event handlers
io.on("connection", (socket) => {
  reportHandler(socket);
  notificationHandler(socket);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Example app running on http://localhost:${port}`);
});
