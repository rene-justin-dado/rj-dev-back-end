
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', (table) => {
    table.increments('id').primary()
    table.string('category')
    table.string('title')
    table.string('sub_title')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blogs')
};
