const express = require('express')
const router = express.Router()

const db = require('../../lib/database')

module.exports = router

router.get('/', (req, res) => {
  db.getAllBlogs()
    .then(data => res.send({data: data}))
    .catch(err => console.error(err))
})

router.get('/by/:category', (req, res) => {
  db.getBlogsByCategory(req.params.category)
    .then(data => res.send({data: data}))
    .catch(err => console.error(err))
})

router.get('/questions', (req, res) => {
  db.getAllBlogQuestions()
    .then(data => res.send({data: data}))
    .catch(err => console.error(err))
})

router.get('/answers', (req, res) => {
  db.getAllBlogAnswers()
    .then(data => res.send({data: data}))
    .catch(err => console.error(err))
})

router.get('/qna', (req, res) => {
  db.getQnA()
    .then(data => res.send({data: data}))
    .catch(err => console.error(err))
})
