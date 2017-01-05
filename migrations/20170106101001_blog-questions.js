
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog-questions', (table) => {
    table.increments('id').primary()
    table.string('question')
    table.integer('blog_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blog-questions')
};
