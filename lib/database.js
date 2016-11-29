const config = require('../knexfile.js')[process.env.NODE_ENV || 'development'],
      knex = require('knex')(config)

module.exports = {
  getAllProjects,
  getAllBlogs
}

function getAllProjects () {
  return knex ('projects')
    .select()
    .then(data => data)
}

function getAllBlogs () {
  return knex ('blogs')
    .select()
    .then(data => data)
}
