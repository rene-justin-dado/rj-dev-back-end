const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT
// const db = require('./postgres')
const projects = require('../routes/v1/projects')
const blogs = require('../routes/v1/blogs')

app.use(cors())

app.use('/v1/projects', projects)
app.use('/v1/blogs', blogs)

app.listen(port, () => console.log(`Listening on port: ${port}`))
