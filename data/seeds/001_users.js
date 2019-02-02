
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "JohnyA", password: "1234", email: "johny@gmail.com", phone: "2155452121" },
        { username: "MrKitty", password: "12345", email: "mrkitty@gmail.com", phone: "2155452121" },
        { username: "MrTwister", password: "123456", email: "twister@gmai.com", phone: "2155452121" }
      ]);
    });
};

