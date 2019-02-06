const db = require("../config/dbConfig.js");
const momentTimeZone = require("moment-timezone");
const moment = require("moment");
const schedule = require("node-schedule");
const express = require("express");
const wget = require("node-wget");
const router = express.Router();
const twilio = require("twilio");
const cron = require("node-cron");
const fetch = require("fetch");
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

router.get("/", (req, res) => {
  console.log("In message area\n");
  try {
    client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        body: "Water yer plants!!",
        to: process.env.TWILIO_TARGET_NUMBER
      })
      .then(message => console.log(message.sid))
      .done();
    res.status(200);
  } catch (err) {
    res.status(500).json({
      message:
        "There was an error trying to connect to the data base, please try again"
    });
  }
});

router.post("/setschedule", async (req, res) => {
  try {
    date = req.body.date;
    console.log(date);
    cron.schedule(date, () => {
      console.log("---------------------");
      console.log("Running Cron Job");
      client.messages
        .create({
          from: process.env.TWILIO_PHONE_NUMBER,
          body: "Water yer plants!!",
          to: process.env.TWILIO_TARGET_NUMBER
        })
        .then(message => console.log(message.sid))
        .done();
      // SEND GET //
    });
    res.status(200);
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
