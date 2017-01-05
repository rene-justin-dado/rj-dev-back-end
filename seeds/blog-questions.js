
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog-questions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blog-questions').insert({
          id: 99999,
          question: "What's your take on the DBC/EDA (Dev Bootcamp/Enspiral Dev Academy) experience?",
          blog_id: 99999,
          blog_answers_id: 99999
        }),
        knex('blog-questions').insert({
          id: 99998,
          question: "What are your impressions?",
          blog_id: 99999,
          blog_answers_id: 99998
        }),
        knex('blog-questions').insert({
          id: 99997,
          question: "Which timebox and habits techniques did you try?",
          blog_id: 99998,
          blog_answers_id: 99997
        }),
        knex('blog-questions').insert({
          id: 99996,
          question: "What learnings did you take from the chapter?",
          blog_id: 99997,
          blog_answers_id: 99996
        }),
        knex('blog-questions').insert({
          id: 99995,
          question: "How did the 'process over product' concept affect the way you tackled the site redesign and rebuild?",
          blog_id: 99996,
          blog_answers_id: 99995
        })
      ]);
    });
};
