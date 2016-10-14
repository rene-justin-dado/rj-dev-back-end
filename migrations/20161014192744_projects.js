
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('github_link')
    table.string('deployment_link')
    table.string('github_icon')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
}
