const config = require('../knexfile.js')[process.env.NODE_ENV || 'development'],
      knex = require('knex')(config)

module.exports = {
  getAllProjects
}

function getAllProjects () {
  return knex ('projects')
    .select()
    .then(data => data)
}
