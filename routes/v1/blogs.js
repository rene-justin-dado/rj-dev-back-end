'use strict'
const express = require('express')
const router = express.Router()

const db = require('../../lib/database')

module.exports = router

router.get('/by/:category', (req, res) => {
  db.getBlogsByCategory(req.params.category)
    .then(data => res.send({data: data}))
    .catch(err => console.error(err))
})

router.post('/add/by/:category/post', (req, res) => {
  const category = req.params.category
  const title = req.params.title || ''
  const subTitle = req.params.sub_title || ''
  const content = req.params.content || ''

  db.addBlogByCategory(category, title, subTitle, content)
    .then(data => res.json({data: data}))
    .catch(err => console.error(err))
})

router.get('/:category/questions', (req, res) => {
  db.getAllBlogQuestions(req.params.category)
    .then(data => res.send({data: data}))
    .catch(err => console.error(err))
})

router.get('/:category/answers', (req, res) => {
  db.getAllBlogAnswers(req.params.category)
    .then(data => res.send({data: data}))
    .catch(err => console.error(err))
})

router.get('/qna', (req, res) => {
  db.getQnA()
    .then(data => res.send({data: data}))
    .catch(err => console.error(err))
})
