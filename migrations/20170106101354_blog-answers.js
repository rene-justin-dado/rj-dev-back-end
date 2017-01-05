
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog-answers', (table) => {
    table.increments('id').primary()
    table.string('answer')
    table.integer('blog_id')
    table.integer('blog_questions_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blog-answers')
};
