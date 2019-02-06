require("dotenv").config();
const wget = require("node-wget");
const schedule = require("node-schedule");
const cron = require("node-cron");
const appointmentSender = require("./appointmentSender");

module.exports = {
  appointmentSetter
};

function appointmentSetter(date) {
  cron.schedule(date, function() {
    console.log("---------------------");
    console.log("Running Cron Job");
    appointmentSender();
  });
}

/*  DATE FORMAT
   * * * * * *
     | | | | | |
     | | | | | day of week
     | | | | month
     | | | day of month
     | | hour
     | minute
     second ( optional )

*/
