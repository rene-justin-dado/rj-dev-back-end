const express = require('express')
const router = express.Router()

const db = require('../../lib/database')

module.exports = router

router.get('/', (req, res) => {
  db.getAllBlogs()
    .then(data => res.send({data: data}))
    .catch(() => res.status(500).send("Sorry, something went horribly, terribly wrong..."))
})

router.get('/contentTitles', (req, res) => {
  db.getAllBlogContentTitles()
    .then(data => res.send({data: data}))
    .catch(() => res.status(500).send("Sorry, something went horribly, terribly wrong..."))
})
