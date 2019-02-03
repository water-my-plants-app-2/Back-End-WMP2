const db = require('../config/dbConfig.js');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const helpers = require('../helpers/loginHelper.js');

router.get('/', (req, res) => {
    res.send('Login');
});

router.post('/', async (req, res) => {
    try {
        const {username, password} = req.body;
        if(!username || !password) {
            res.status(400).json({message: "Please enter the password and username"});
        } else {
        const userForCheck = await db("users").where({ username: username }).first();

            if (userForCheck && bcrypt.compareSync(password, userForCheck.password)) {
                const token = helpers.generateToken(userForCheck);
                res.status(200).json({ userForCheck, token });
            } else {
                res.status(401).json({message: "Your login attempt failed. Please check login and password and try again"});
            }
        }
    } catch (err) {
        res.status(500).json({ message: "There was an error, Please try again."});
    }
});

module.exports = router;
