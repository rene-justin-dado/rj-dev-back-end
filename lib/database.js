const config = require('../knexfile.js')[process.env.NODE_ENV || 'development'],
      knex = require('knex')(config)

module.exports = {
  getAllProjects,
  getAllBlogQuestions,
  getAllBlogAnswers,
  getQnA,
  getAllBlogs,
  getBlogsByCategory,
  addBlogByCategory
}

function getAllProjects () {
  return knex('projects')
    .then(projects => projects)
    .catch(err => console.error(err))
}

function getAllBlogQuestions () {
  return knex('blogs')
    .join('blog-questions', 'blogs.id', '=', 'blog_id')
    .select('blogs.id', 'blogs.category', 'blogs.title', 'blogs.sub_title', 'question')
    .then(questions => questions)
    .catch(err => console.error(err))
}

function getAllBlogAnswers () {
  return knex('blogs')
    .join('blog-answers', 'blogs.id', '=', 'blog_id')
    .select('blogs.id', 'blogs.category', 'blogs.title', 'blogs.sub_title', 'answer')
    .then(answers => answers)
    .catch(err => console.error(err))
}

function getQnA () {
  return knex('blog-questions')
    .join('blog-answers', 'blog-questions.id', '=', 'blog_questions_id')
    .select('blog-questions.blog_id', 'blog-questions.question', 'answer')
    .then(qna => qna)
    .catch(err => console.error(err))
}

function getAllBlogs () {
  return knex('blogs')
  .then(blogs => blogs)
  .catch(err => console.error(err))
}

function getBlogsByCategory (category) {
  return knex('blogs')
  .where({
    category
  })
  .then(blogsByCategory => blogsByCategory)
  .catch(err => console.error(err))
}

function addBlogByCategory (category, title, subTitle) {
  return knex('blogs')
  .insert({
    category,
    title,
    sub_title: subTitle
  })
}
