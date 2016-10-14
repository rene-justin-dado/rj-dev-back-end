
exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        knex('projects').insert({
          name: 'Quote Generator',
          github_link: 'https://github.com/rene-justin-dado/quote-generator',
          deployment_link: 'https://rene-justin-dado.github.io/quote-generator/'
        }),
        knex('projects').insert({
          name: 'JS Calculator',
          github_link: 'https://github.com/rene-justin-dado/JS-calculator',
          deployment_link: 'https://rene-justin-dado.github.io/JS-calculator/'
        }),
        knex('projects').insert({
          name: 'Cobra Thesaurus',
          github_link: 'https://github.com/shsaci/cobra-telegram',
          deployment_link: ''
        })
      ])
    })
}
