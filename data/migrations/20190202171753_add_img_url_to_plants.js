
exports.up = function(knex, Promise) {
    return knex.schema.table('plants', function(tbl){

        tbl.string('img_url');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropColumn('img_url');
  };
