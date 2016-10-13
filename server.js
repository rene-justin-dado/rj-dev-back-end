const express = require('express')

const app = express()
const PORT = process.env.port || 3000

const db = require('./lib/database')

app.get('/', (req, res) => {
  db.getAllProjects()
    .then(data => res.json({data: data}))
})

app.listen (PORT, () => console.log(`Listening on port: ${PORT}`))
