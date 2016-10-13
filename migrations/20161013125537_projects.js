
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('github_link')
    table.json('stack')
    table.string('deployment_link')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
}
