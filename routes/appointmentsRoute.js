const db = require('../config/dbConfig.js');
const momentTimeZone = require('moment-timezone');
const moment = require('moment');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Appointment route");
});

module.exports = router; 