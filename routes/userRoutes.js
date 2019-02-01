const express = require("express");
const router = express.Router();

// sanity check
router.get("/", (req, res) => {
  return res
    .status(200)
    .json({ message: "Back end and front end are connected." });
});

module.exports = router;
