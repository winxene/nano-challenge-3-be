const express = require("express");
const app = express();
const http = require("http");
const socketIO = require("socket.io");
const server = http.Server(app);
const io = socketIO(server);
const reportHandler = require("./socket/handlers/reportHandler");
const notificationHandler = require("./socket/handlers/notificationHandler");
const reportDetailRoutes = require("./api/routes/reportDetails");

// Middleware
app.use(express.json());

// RESTful API routes
app.use("/report-detail", reportDetailRoutes);

// Socket.io configuration and event handlers
io.on("connection", (socket) => {
  reportHandler(socket);
  notificationHandler(socket);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Example app running on http://localhost:${port}`);
});
