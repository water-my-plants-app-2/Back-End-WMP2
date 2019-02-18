
exports.up = function(knex, Promise) {
    return knex.schema.table('plants', function(tbl){

        tbl.boolean('needsToWater').defaultTo(false);;
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropColumn('needsToWater');
  };
