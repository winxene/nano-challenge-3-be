const express = require("express");
const app = express();
const http = require("http");
const socketIO = require("socket.io");
const server = http.Server(app);
const io = socketIO(server);

io.sockets.setMaxListeners(20);

// Socket.io event handlers
const reportHandler = require("./socket/handlers/reportHandler"); //delete this line
const notificationHandler = require("./socket/handlers/notificationHandler");
const coordinateHandler = require("./socket/handlers/coordinateHandler");

// RESTful API routes
const allUserDetailRoutes = require("./api/routes/details/allUserDetails");
const allAdminDetailRoutes = require("./api/routes/details/allAdminDetails");
const userDetailRoutes = require("./api/routes/details/userDetails");
const adminDetailRoutes = require("./api/routes/details/adminDetails");

// Authentication routes
const userAuthRoutes = require("./api/routes/auth/userAuth");
const adminAuthRoutes = require("./api/routes/auth/adminAuth");

// Middleware
app.use(express.json());

// RESTful API routes
app.use("/user-detail/all", allUserDetailRoutes);
app.use("/admin-detail/all", allAdminDetailRoutes);
app.use("/user-detail", userDetailRoutes);
app.use("/admin-detail", adminDetailRoutes);
app.use("/auth/user", userAuthRoutes);
app.use("/auth/admin", adminAuthRoutes);

// Socket.io configuration and event handlers
io.on("connection", (socket) => {
  reportHandler(socket);
  notificationHandler(socket);
  coordinateHandler(socket);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Example app running on http://localhost:${port}`);
});
