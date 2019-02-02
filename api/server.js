const express = require("express");
const applyGlobalMiddleware = require("../config/globalMiddleware.js");
const userRoutes = require("../routes/userRoutes.js");
const loginRoute = require('../routes/loginRoute.js');
const registerRoute = require('../routes/registerRoute');

// server
const server = express();

// middleware
applyGlobalMiddleware(server);

// routes
server.use("/api/users/", userRoutes);
server.use("/api/login/", loginRoute);
server.use("/api/register/", registerRoute);

module.exports = server;
