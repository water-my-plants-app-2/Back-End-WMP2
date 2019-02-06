exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("appointments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("appointments").insert([
        {
          name: "Test Boy",
          phoneNumber: "12345678910",
          notification: "Hello World",
          timeZone: "EST",
          some_time: "2019-02-14 15:00:00"
        }
      ]);
    });
};
