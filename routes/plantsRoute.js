const db = require('../config/dbConfig.js');
const express = require('express');
const router = express.Router();
const helpers = require('../helpers/plantsHelper.js');

router.get('/', (req, res) => {
    res.send('Plants Route');
});

module.exports = router; 