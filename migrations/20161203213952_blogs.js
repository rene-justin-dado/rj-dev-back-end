
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', (table) => {
    table.increments('id').primary()
    table.string('category')
    table.string('title')
    table.json('content')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogs')
};
