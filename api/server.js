const express = require("express");
const applyGlobalMiddleware = require("../config/globalMiddleware.js");
const userRoutes = require("../routes/userRoutes.js");
const loginRoute = require('../routes/loginRoute.js');

// server
const server = express();

// middleware
applyGlobalMiddleware(server);

// routes
server.use("/api/users/", userRoutes);
server.use("/api/login/", loginRoute);

module.exports = server;
