const express = require('express')

const app = express()
const PORT = process.env.port || 3000

const projects = require('./routes/v1/projects')

app.use('/v1/projects', projects)

app.listen (PORT, () => console.log(`Listening on port: ${PORT}`))
