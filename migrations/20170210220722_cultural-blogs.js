exports.up = function(knex, Promise) {
  return knex.schema.createTable('cultural-blogs', (table) => {
    table.increments('id').primary()
    table.string('category')
    table.string('title')
    table.string('sub_title')
    table.string('content')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cultural-blogs')
};
