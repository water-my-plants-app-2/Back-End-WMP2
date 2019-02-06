const db = require("../config/dbConfig.js");
const momentTimeZone = require("moment-timezone");
const moment = require("moment");
const express = require("express");
const router = express.Router();
const twilio = require("twilio");
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

router.get("/", (req, res) => {
  console.log("In message area\n");

  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      body: "Water yer plants!!",
      to: process.env.TWILIO_TARGET_NUMBER
    })
    .then(message => console.log(message.sid))
    .done();
});

module.exports = router;
