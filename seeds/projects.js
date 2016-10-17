
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
        }),
        knex('projects').insert({
          name: 'Stupid Questions (front-end stuff; see the readme for details)',
          github_link: 'https://github.com/nikau-2016/stupid-questions-client',
          deployment_link: 'TBA'
        }),
        knex('projects').insert({
          name: 'Stupid Questions (front-end stuff; see the readme for details)',
          github_link: 'https://github.com/nikau-2016/stupid-questions',
          deployment_link: 's2pid-kweschinz.herokuapp.com'
        }),
        knex('projects').insert({
          name: '#adulting (front-end stuff; see the readme for details)',
          github_link: 'https://github.com/nikau-2016/lifestack-client.git',
          deployment_link: 'https://adulting.herokuapp.com'
        }),
        knex('projects').insert({
          name: '#adulting (back-end stuff; see the readme for details)',
          github_link: 'https://github.com/nikau-2016/lifestack.git',
          deployment_link: 'https://adulting-server.herokuapp.com/'
        })
      ])
    })
}
