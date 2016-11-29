
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('table_name').insert({
          category: 'EDA culture',
          title: 'C1 - First Reflections',
          content: `
          <h4 class="blog-title">I\'m taking the opportunity, on this fine, sunny Friday morning to stay inside and write this, my first ever blog post. These are just a few thoughts I have about EDA so far at the start of phase-0, with the lovely Nikau cohort.</h4>
          <h5>What\'s your take on the DBC/EDA experience?</h5>
          <p>To sum it up very simply, it seems to be a very community-centric type of system, not unlike a good (non-toxic) gaming community. Everyone will have their own skills and experiences to bring to the table and their own goals and motivations to work towards. However, I get the sense that, at least from what I got from my own cohort so far, we\'re all in it for the same reason at the end of the day. We\'re here to learn and we can lean on each other when it comes down to building our skills.</p>
`
        }),
        knex('table_name').insert({
          category: 'EDA culture',
          title: 'C1 - Time and Habits',
          content: `
          `
        }),
        knex('table_name').insert({
          category: 'EDA culture',
          title: 'C2 - Emotional Intelligence',
          content: ``
        })
      ]);
    });
};
