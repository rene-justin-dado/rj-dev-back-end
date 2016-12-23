const express = require('express'),
      cors = require('cors')
      app = express(),
      PORT = 3000 || process.env.port,
      db = require('./postgres'),
      projects = require('../routes/v1/projects'),
      blogs = require('../routes/v1/blogs')

app.use(cors())

app.use('/v1/projects', projects)
app.use('/v1/blogs', blogs)

app.listen (PORT, () => console.log(`Listening on port: ${PORT}`))
