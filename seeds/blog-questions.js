
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
        }),
// ^^^ C3 - The Process of Meditation (999996)  ^^^
        knex('blog-questions').insert({
          id: 999983,
          question: "Can you think of an analogy to describe HTML, CSS and the DOM? How would you describe it to your non-technical friend?",
          blog_id: 888889,
          blog_answers_id: 999983
        }),
        knex('blog-questions').insert({
          id: 999982,
          question: "What is meant by boxifying design?",
          blog_id: 888889,
          blog_answers_id: 999982
        }),
        knex('blog-questions').insert({
          id: 999981,
          question: "What is the box model?",
          blog_id: 888889,
          blog_answers_id: 999981
        }),
// ^^^ T2 - My Technical Blog [0.1] (888889)  ^^^
        knex('blog-questions').insert({
          id: 999980,
          question: "What is grid based design?",
          blog_id: 888888,
          blog_answers_id: 999980
        }),
        knex('blog-questions').insert({
          id: 999979,
          question: "Whats all the hype about responsive webpages?",
          blog_id: 888888,
          blog_answers_id: 999979
        }),
        knex('blog-questions').insert({
          id: 999978,
          question: "What is semantic structure?",
          blog_id: 888888,
          blog_answers_id: 999978
        }),
        knex('blog-questions').insert({
          id: 999977,
          question: "Any other points you found interesting and want to reflect on.",
          blog_id: 888888,
          blog_answers_id: 999977
        }),
        knex('blog-questions').insert({
          id: 999976,
          question: "How did the 'process over product' concept affect the way you tackled the site redesign and rebuild?",
          blog_id: 888887,
          blog_answers_id: 999976
        }),
        knex('blog-questions').insert({
          id: 999975,
          question: "What a responsive site is, and why responsiveness is important.",
          blog_id: 888887,
          blog_answers_id: 999975
        }),
        knex('blog-questions').insert({
          id: 999974,
          question: "What mobile first design is, and why it's important.",
          blog_id: 888887,
          blog_answers_id: 999974
        }),
        knex('blog-questions').insert({
          id: 999973,
          question: "What frameworks are, and their pros and cons.",
          blog_id: 888887,
          blog_answers_id: 999973
        }),
        knex('blog-questions').insert({
          id: 999972,
          question: "What a wireframe is and why we use it.",
          blog_id: 888887,
          blog_answers_id: 999972
        }),
        knex('blog-questions').insert({
          id: 999971,
          question: "The aspects of your wireframes you found difficult to implement, and why.",
          blog_id: 888887,
          blog_answers_id: 999971
        })
// ^^^ T2 - My Technical Blog [0.3] (888887)  ^^^
      ]);
    });
};
