
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog-questions', (table) => {
    table.increments('id').primary()
    table.string('question', 1000)
    table.integer('blog_id')
    table.integer('blog_answers_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blog-questions')
};
