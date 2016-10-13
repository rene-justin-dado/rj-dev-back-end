const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

module.exports = {
  getAllProjects
}

function getAllProjects () {
  return knex ('projects')
    .select()
    .then(data => data)
}
