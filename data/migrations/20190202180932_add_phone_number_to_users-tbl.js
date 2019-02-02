
exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(tbl){

        tbl.string('phone', 255);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropColumn('phone');
  };