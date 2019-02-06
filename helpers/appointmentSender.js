require("dotenv").config();
const wget = require("node-wget");
const schedule = require("node-schedule");

module.exports = {
  appointmentSender
};

function appointmentSender() {
  wget("localhost:5000/api/message");
}
