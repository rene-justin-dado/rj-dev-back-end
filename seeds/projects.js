
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          name: 'Quote Generator',
          github-link: 'https://github.com/rene-justin-dado/quote-generator.git',
          stack: {
            jQuery
          },
          deployment-link: 'https://rene-justin-dado.github.io/quote-generator/'
        }),

        knex('projects').insert({
          name: 'Calculator',
          github-link: 'https://github.com/rene-justin-dado/JS-calculator',
          stack: {},
          deployment-link: ''
        }),

        knex('projects').insert({
          name: 'Thesaurus',
          github-link: 'https://github.com/rene-justin-dado/cobra-telegram',
          stack: {},
          deployment-link: ''
        })
      ]);
    });
};
