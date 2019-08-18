const express = require('express')
const cors = require('cors')
const app = express()
const config = require('../config')
const PORT = config.port
const projects = require('../routes/v1/projects')
const blogs = require('../routes/v1/blogs')

app.use(cors())

app.use('/v1/projects', projects)
app.use('/v1/blogs', blogs)
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
