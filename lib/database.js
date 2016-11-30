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
    .catch(err => res.status(500).json({error: "Sorry, something went wrong!"}))
}

function getAllBlogs () {
  return knex ('blogs')
    .select()
    .then(data => data)
    .catch(err => res.status(500).json({error: "Sorry, something went wrong!"}))
}
