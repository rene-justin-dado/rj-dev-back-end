
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog-questions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blog-questions').insert({
          id: 999999,
          question: "What's your take on the DBC/EDA (Dev Bootcamp/Enspiral Dev Academy) experience?",
          blog_id: 999999,
          blog_answers_id: 999999
        }),
        knex('blog-questions').insert({
          id: 999998,
          question: "What are your impressions?",
          blog_id: 999999,
          blog_answers_id: 999998
        }),
        knex('blog-questions').insert({
          id: 999994,
          question: "How do you see yourself engaging with this type of culture?",
          blog_id: 999999,
          blog_answers_id: 999994
        }),
        knex('blog-questions').insert({
          id: 999993,
          question: "Have your expectations of EDA changed? If so, how?",
          blog_id: 999999,
          blog_answers_id: 999993
        }),
        knex('blog-questions').insert({
          id: 999992,
          question: "Are you excited to participate in this kind of learning environment? Does it make you nervous?",
          blog_id: 999999,
          blog_answers_id: 999992
        }),
// ^^^ C1 - First Reflections (999999)  ^^^
        knex('blog-questions').insert({
          id: 999997,
          question: "Which timebox and habits techniques did you try?",
          blog_id: 999998,
          blog_answers_id: 999997
        }),
        knex('blog-questions').insert({
          id: 999991,
          question: "What did you find interesting?",
          blog_id: 999998,
          blog_answers_id: 999991
        }),
        knex('blog-questions').insert({
          id: 999990,
          question: "What worked for you?",
          blog_id: 999998,
          blog_answers_id: 999990
        }),
        knex('blog-questions').insert({
          id: 999989,
          question: "Which will you experiment further with?",
          blog_id: 999998,
          blog_answers_id: 999989
        }),
// ^^^ C1 - Time and Habits (999998)  ^^^
        knex('blog-questions').insert({
          id: 999996,
          question: "What learnings did you take from the chapter?",
          blog_id: 999997,
          blog_answers_id: 999996
        }),
        knex('blog-questions').insert({
          id: 999988,
          question: "How did you find the two minutes of mindfulness?",
          blog_id: 999997,
          blog_answers_id: 999988
        }),
// ^^^ C2 - Emotional Intelligence (999997)  ^^^
        knex('blog-questions').insert({
          id: 999995,
          question: "How did the 'process over product' concept affect the way you tackled the site redesign and rebuild?",
          blog_id: 999996,
          blog_answers_id: 999995
        }),
        knex('blog-questions').insert({
          id: 999987,
          question: "What did you think about meditation before reading chapter 2?",
          blog_id: 999996,
          blog_answers_id: 999987
        }),
        knex('blog-questions').insert({
          id: 999986,
          question: "What new things have you learnt about mediation?",
          blog_id: 999996,
          blog_answers_id: 999986
        }),
        knex('blog-questions').insert({
          id: 999985,
          question: "Did any of the suggested meditation techniques stand out to you?",
          blog_id: 999996,
          blog_answers_id: 999985
        }),
        knex('blog-questions').insert({
          id: 999984,
          question: "Any other musings?",
          blog_id: 999996,
          blog_answers_id: 999984
        })
// ^^^ C3 - The Process of Meditation (999996)  ^^^
      ]);
    });
};
