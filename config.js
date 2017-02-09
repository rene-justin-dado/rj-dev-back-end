const development = {
  port: 3000,
  url: 'http://localhost:5000'
}
const production = { url: process.env.PORT }

module.exports = process.env.NODE_ENV === 'production' ? production : development
