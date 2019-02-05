const express = require("express");
const applyGlobalMiddleware = require("../config/globalMiddleware.js");
const userRoutes = require("../routes/userRoutes.js");
const loginRoute = require('../routes/loginRoute.js');
const registerRoute = require('../routes/registerRoute');
const plantsRoute = require('../routes/plantsRoute');
const usersUnpRoutes = require('../routes/usersUnprotected.js');
const plantsUnpRoutes = require('../routes/plantsUprotected.js');

// server
const server = express();

// middleware
applyGlobalMiddleware(server);

// routes

server.use("/api/login/", loginRoute);
server.use("/api/register/", registerRoute);
server.use("/api/users/", userRoutes);
server.use("/api/plants/", plantsRoute);
server.use("/api/usersunp/", usersUnpRoutes);
server.use("/api/plantsunp/", plantsUnpRoutes);

module.exports = server;
