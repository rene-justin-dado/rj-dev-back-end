exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('technical-blogs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('technical-blogs').insert({
          id: 888889,
          category: 'EDA technical',
          title: 'T2 - My Technical Blog (0.1)',
          sub_title: "Here's my take on a couple of technical concepts."
        }),
        knex('technical-blogs').insert({
          id: 888888,
          category: 'EDA technical',
          title: 'T2 - My Technical Blog (0.2)',
          sub_title: "Here's some more technical concepts that I also have opinions about."
        }),
        knex('technical-blogs').insert({
          id: 888887,
          category: 'EDA technical',
          title: 'T3 - My Technical Blog (0.3)',
          sub_title: "Some more technical knowledge. (this is part 3)"
        }),
        knex('technical-blogs').insert({
          id: 888886,
          category: 'EDA technical',
          title: 'T4 - My Technical Blog (0.4)',
          sub_title: "Some technical knowledge. (this concerns javascript)"
        })
      ])
    })
}
