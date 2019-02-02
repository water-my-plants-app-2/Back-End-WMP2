const db = require('../config/dbConfig.js');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const helpers = require('../helpers/loginHelper.js');

router.get('/', async (req, res) => {
    res.send('Register');
});

router.post("/", async (req, res) => {
    try {
        const userCredentials = req.body;
        if(userCredentials.username && userCredentials.password && userCredentials.email && userCredentials.phone){
            const hash = bcrypt.hashSync(userCredentials.password, 12);
            userCredentials.password = hash;
    
            const newUser = await db("users").insert(userCredentials);
            const token = helpers.generateToken(userCredentials);
            res.status(201).json({newUser, token});
        } else {
            res.status(400).json({message: "Please fill all the required fields"});
        }
    } catch (err) {
        res.status(500).json({ message: "Register failed. Please try again" });
    }
});

module.exports = router;