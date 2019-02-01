const express = require("express");
const applyGlobalMiddleware = require("../config/globalMiddleware.js");
const userRoutes = require("../routes/userRoutes.js");

// server
const server = express();

// middleware
applyGlobalMiddleware(server);

// routes
server.use("/api/users/", userRoutes);

module.exports = server;
