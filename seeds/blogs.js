
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blogs').insert({
          id: 99999,
          category: 'EDA culture',
          title: 'C1 - First Reflections',
          sub-title: "I'm taking the opportunity, on this fine, sunny Friday morning to stay inside and write this, my first ever blog post. These are just a few thoughts I have about EDA so far at the start of phase-0, with the lovely Nikau cohort."
        }),
        knex('blogs').insert({
          id: 99998,
          category: 'EDA culture',
          title: 'C1 - Time and Habits',
          sub-title: "Here's my second post. Hope this looks okay. @.@"
        }),
        knex('blogs').insert({
          id: 99997,
          category: 'EDA culture',
          title: 'C2 - Emotional Intelligence',
          sub-title: "EQ > IQ? It's not really news to me now."
        }),
        knex('blogs').insert({
          id: 99996,
          category: 'EDA culture',
          title: 'C3 - The Process of Meditation',
          sub-title: "Here's one about meditation"
        })
      ])
    })
}
