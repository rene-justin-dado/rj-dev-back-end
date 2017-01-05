
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog-answers').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blog-answers').insert({
          id: 99999,
          answer: "To sum it up very simply, it seems to be a very community-centric type of system, not unlike a good (non-toxic) gaming community. Everyone will have their own skills and experiences to bring to the table and their own goals and motivations to work towards. However, I get the sense that, at least from what I got from my own cohort so far, we're all in it for the same reason at the end of the day. We're here to learn and we can lean on each other when it comes down to building our skills.",
          blog_id: 99999,
          blog_questions_id: 99999
        }),
        knex('blog-answers').insert({
          id: 99998,
          answer: "I'm in love with the system already. It actually hits very close to home, I think. As a gamer, having been part of several gaming communities, I've drawn a few comparisons between EDA and the communities I've experienced. While the goal in gaming is mainly to have fun (unless you're <em>that</em> type of person... XD), part of the experience is learning the rules of a game, testing out new things and developing skills that are useful within the game world. EDA, I feel, seems to build a community where fun, experimentation and skill development are simply applied to the real world, rather than a virtual one.",
          blog_id: 99999,
          blog_questions_id: 99998
        }),
        knex('blog-answers').insert({
          id: 99997,
          answer: "I've managed to stumble into the Growth Mindset on accident (or maybe not?). I've had success jumping into phase-0 with this in mind and have been playing around with resources and tools ever since I applied. (it's really just treating study like play time) I'm also planning out the future in increments.  The Toggl timer in conjunction with the Pomodoro technique was another one of those techniques that I tried out.",
          blog_id: 99998,
          blog_questions_id: 99997
        }),
        knex('blog-answers').insert({
          id: 99996,
          answer: "That we really need to rethink how we define intelligence to be inclusive of factors beyond intellect and that the world seems to be getting less monochrome, so to speak.<br>There's also a lot to be said about the value of taking time away from task and objective oriented thinking to just focusing on awareness. To knowing all the intimate little details that your brain can process that normally get filtered out when we work just to accomplish a goal.",
          blog_id: 99997,
          blog_questions_id: 99996
        }),
        knex('blog-answers').insert({
          id: 99995,
          answer: "My site looks like a butt at the moment. :/ If I wasn't focusing my attention on the actual process of making the site work, I think I'd get a lot more caught up on random little things; Like the colour doesn't look so great, or that post isn't quite centered. I could have wasted a lot of time that could be spent building the site.",
          blog_id: 99996,
          blog_questions_id: 99995
        })
      ]);
    });
};
