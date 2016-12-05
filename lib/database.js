const config = require('../knexfile.js')[process.env.NODE_ENV || 'development'],
      knex = require('knex')(config)

module.exports = {
  getAllProjects,
  getAllBlogs,
  getAllBlogContentTitles
}

function getAllProjects () {
  return knex ('projects')
    .then(projects => projects)
    .catch(err => res.status(500).json({error: "Sorry, something went wrong!"}))
}

function getAllBlogs () {
  return knex ('blogs')
    .then(blogs => blogs)
    .catch(err => res.status(500).json({error: "Sorry, something went wrong!"}))
}

function getAllBlogContentTitles () {
  return knex ('blogs')
    .whereRaw('?? = ?', [blogs.content, !null])
    .then(data => console.log(data))
    .then(contentTitles => contentTitles)
    .catch(err => res.status(500).json({error: "Sorry, something went wrong!"}))
}
