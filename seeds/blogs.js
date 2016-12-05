
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blogs').insert({
          category: 'EDA culture',
          title: 'C1 - First Reflections',
          content: JSON.stringify({
            title: "<h4 class='blog-title'>I'm taking the opportunity, on this fine, sunny Friday morning to stay inside and write this, my first ever blog post. These are just a few thoughts I have about EDA so far at the start of phase-0, with the lovely Nikau cohort.</h4>",
            questions: "<h5>What's your take on the DBC/EDA experience?</h5>",
            answers: "<p>To sum it up very simply, it seems to be a very community-centric type of system, not unlike a good (non-toxic) gaming community. Everyone will have their own skills and experiences to bring to the table and their own goals and motivations to work towards. However, I get the sense that, at least from what I got from my own cohort so far, we're all in it for the same reason at the end of the day. We're here to learn and we can lean on each other when it comes down to building our skills.</p>"
          })
        }),
        knex('blogs').insert({
          category: 'EDA culture',
          title: 'C1 - Time and Habits',
          content: JSON.stringify({
            title: "<h4 class='blog-title'>Here's my second post. Hope this looks okay. @.@</h4>",
            questions: "<h5>Which timebox and habits techniques did you try?</h5>",
            answers: "<p>I've managed to stumble into the <em>Growth Mindset</em> on accident (or maybe not?). I've had success jumping into phase-0 with this in mind and have been playing around with resources and tools ever since I applied. (it's really just treating study like play time) I'm also planning out the future in increments.  The Toggl timer in conjunction with the Pomodoro technique was another one of those techniques that I tried out.</p>"
          })
        }),
        knex('blogs').insert({
          category: 'EDA culture',
          title: 'C2 - Emotional Intelligence',
          content: JSON.stringify({
            title: "<h4 class='blog-title'>EQ > IQ? It's not really news to me now.</h4>",
            questions: "<h5>What learnings did you take from the chapter?</h5>",
            answers: "<p>That we really need to rethink how we define intelligence to be inclusive of factors beyond intellect and that the world seems to be getting less monochrome, so to speak.<br>There's also a lot to be said about the value of taking time away from task and objective oriented thinking to just focusing on awareness. To knowing all the intimate little details that your brain can process that normally get filtered out when we work just to accomplish a goal.</p>"
          })
        })
      ])
    })
}
