
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
          id: 99994,
          question: "How do you see yourself engaging with this type of culture?",
          blog_id: 99999,
          blog_answers_id: 99994
        }),
        knex('blog-questions').insert({
          id: 99993,
          question: "Have your expectations of EDA changed? If so, how?",
          blog_id: 99999,
          blog_answers_id: 99993
        }),
        knex('blog-questions').insert({
          id: 99992,
          question: "Are you excited to participate in this kind of learning environment? Does it make you nervous?",
          blog_id: 99999,
          blog_answers_id: 99992
        }),
// ^^^ C1 - First Reflections (99999)  ^^^
        knex('blog-questions').insert({
          id: 99997,
          question: "Which timebox and habits techniques did you try?",
          blog_id: 99998,
          blog_answers_id: 99997
        }),
        knex('blog-questions').insert({
          id: 99991,
          question: "What did you find interesting?",
          blog_id: 99998,
          blog_answers_id: 99991
        }),
        knex('blog-questions').insert({
          id: 99990,
          question: "What worked for you?",
          blog_id: 99998,
          blog_answers_id: 99990
        }),
        knex('blog-questions').insert({
          id: 99989,
          question: "Which will you experiment further with?",
          blog_id: 99998,
          blog_answers_id: 99989
        }),
// ^^^ C1 - Time and Habits (99998)  ^^^
        knex('blog-questions').insert({
          id: 99996,
          question: "What learnings did you take from the chapter?",
          blog_id: 99997,
          blog_answers_id: 99996
        }),
        knex('blog-questions').insert({
          id: 99988,
          question: "How did you find the two minutes of mindfulness?",
          blog_id: 99997,
          blog_answers_id: 99988
        }),
// ^^^ C2 - Emotional Intelligence (99997)  ^^^
        knex('blog-questions').insert({
          id: 99995,
          question: "How did the 'process over product' concept affect the way you tackled the site redesign and rebuild?",
          blog_id: 99996,
          blog_answers_id: 99995
        }),
        knex('blog-questions').insert({
          id: 99987,
          question: "What did you think about meditation before reading chapter 2?",
          blog_id: 99996,
          blog_answers_id: 99987
        }),
        knex('blog-questions').insert({
          id: 99986,
          question: "What new things have you learnt about mediation?",
          blog_id: 99996,
          blog_answers_id: 99986
        }),
        knex('blog-questions').insert({
          id: 99985,
          question: "Did any of the suggested meditation techniques stand out to you?",
          blog_id: 99996,
          blog_answers_id: 99985
        }),
        knex('blog-questions').insert({
          id: 99984,
          question: "Any other musings?",
          blog_id: 99996,
          blog_answers_id: 99984
        })
// ^^^ C3 - The Process of Meditation (99996)  ^^^
      ]);
    });
};
