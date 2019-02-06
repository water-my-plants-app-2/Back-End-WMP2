require("dotenv").config();
const wget = require("node-wget");
const schedule = require("node-schedule");

module.exports = {
  remindAppointment,
  scheduleSetter
};

function remindAppointment() {
  wget("localhost:5000/api/message");
}

var scheduleSetter = schedule.scheduleJob(date, function() {
  remindAppointment();
});
