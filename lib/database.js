const config = require('../knexfile.js')[process.env.NODE_ENV || 'development'],
      knex = require('knex')(config),
      blogCatConfig = require('./blogCatConfig')

module.exports = {
  getAllProjects,
  getAllBlogQuestions,
  getAllBlogAnswers,
  getQnA,
  getBlogsByCategory,
  addBlogByCategory
}

function getAllProjects () {
  return knex('projects')
    .then(projects => projects)
    .catch(err => console.error(err))
}

function getAllBlogQuestions (category) {
  const blog = blogCatConfig(category)
  return knex(blog)
    .join('blog-questions', `${blog}.id`, '=', 'blog_id')
    .select(`${blog}.id`, `${blog}.category`, `${blog}.title`, `${blog}.sub_title`, 'question')
    .then(questions => questions)
    .catch(err => console.error(err))
}

function getAllBlogAnswers (category) {
  const blog = blogCatConfig(category)
  return knex(blog)
    .join('blog-answers', `${blog}.id`, '=', 'blog_id')
    .select(`${blog}.id`, `${blog}.category`, `${blog}.title`, `${blog}.sub_title`, 'answer')
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

function getBlogsByCategory (category) {
  const blog = blogCatConfig(category)
  return knex(blog)
    .where({ category })
    .then(blogsByCategory => blogsByCategory)
    .catch(err => console.error(err))
}

function addBlogByCategory (category, title, subTitle, content) {
  const blog = blogCatConfig(category)
  return knex(blog)
    .insert({
      category,
      title,
      sub_title: subTitle
    })
}
