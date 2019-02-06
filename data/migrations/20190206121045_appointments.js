exports.up = function(knex, Promise) {
  return knex.schema.createTable("appointments", tbl => {
    tbl.increments();
    tbl.string("name", 255).notNullable();
    tbl.string("phoneNumber", 255).notNullable();
    tbl.string("notification", 255).notNullable();
    tbl.string("timeZone", 255).notNullable();
    tbl.datetime("some_time", 6).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("appointments");
};
