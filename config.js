const development = {
  port: process.env.BACK_PORT,
  url: 'http://localhost:5000'
}
const production = {
  port: process.env.PORT,
  url: 'http://rj-dev-backend.herokuapp.com/'
}

module.exports = process.env.NODE_ENV == 'production' ? production : development
