const cfg = require('../config')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.port || cfg.port
const projects = require('../routes/v1/projects')
const blogs = require('../routes/v1/blogs')

app.use(cors())

app.use('/v1/projects', projects)
app.use('/v1/blogs', blogs)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
