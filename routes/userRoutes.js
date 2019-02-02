const express = require("express");
const router = express.Router();
const helpers = require('../helpers/plantsHelper.js')
const db = require("../config/dbConfig");

// sanity check
router.get("/", (req, res) => {
  return res
    .status(200)
    .json({ message: "Back end and front end are connected." });
});

router.get("/:id/plants", helpers.protected, async (req, res) => {
  try {
    const id = req.params.id;
    const plants = await db('plants').where('userId', id);
    res.status(200).json({plants, decodedToken: req.decodedToken});

  } catch(err) {
    res.status(500).json({message: "There was an error trying to connect to the data base, please try again"});
  }
});

module.exports = router;
