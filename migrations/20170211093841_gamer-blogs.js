exports.up = function(knex, Promise) {
  return knex.schema.createTable('gamer-blogs', (table) => {
    table.increments('id').primary()
    table.string('category')
    table.string('title')
    table.string('sub_title')
    table.string('content')
    table.string('share_image')
    table.string('share_video')
    table.string('share_link')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gamer-blogs')
};
