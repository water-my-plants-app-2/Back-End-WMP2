require("dotenv").config();
const wget = require("node-wget");

module.exports = {
  remindAppointment
};

function remindAppointment(user) {
  wget("localhost:5000/api/message");
}
