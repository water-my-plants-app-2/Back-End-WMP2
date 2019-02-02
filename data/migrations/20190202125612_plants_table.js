
exports.up = function(knex, Promise) {
    return knex.schema.createTable("plants", tbl => {
      tbl.increments();

      tbl.integer('userId').notNullable();

      tbl.string('name', 255).notNullable();

      tbl.string('description', 255).notNullable();

      tbl.string('characteristic', 255);

      tbl.date('lastWater');

      tbl.date('nextWater');
  
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("plants");
  };