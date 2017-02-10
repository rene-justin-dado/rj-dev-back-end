
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog-answers').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blog-answers').insert({
          id: 999999,
          answer: "To sum it up very simply, it seems to be a very community-centric type of system, not unlike a good (non-toxic) gaming community. Everyone will have their own skills and experiences to bring to the table and their own goals and motivations to work towards. However, I get the sense that, at least from what I got from my own cohort so far, we're all in it for the same reason at the end of the day. We're here to learn and we can lean on each other when it comes down to building our skills.",
          blog_id: 999999,
          blog_questions_id: 999999
        }),
        knex('blog-answers').insert({
          id: 999998,
          answer: "I'm in love with the system already. It actually hits very close to home, I think. As a gamer, having been part of several gaming communities, I've drawn a few comparisons between EDA and the communities I've experienced. While the goal in gaming is mainly to have fun (unless you're <em>that</em> type of person... XD), part of the experience is learning the rules of a game, testing out new things and developing skills that are useful within the game world. EDA, I feel, seems to build a community where fun, experimentation and skill development are simply applied to the real world, rather than a virtual one.",
          blog_id: 999999,
          blog_questions_id: 999998
        }),
        knex('blog-answers').insert({
          id: 999994,
          answer: "Very strongly. Quite happily. Being an introvert is a struggle no matter what community/culture you engage with, but everyone needs other people; cooperation is the entire basis for our species' rise to prominence on this planet. And as I mentioned, I've already noted some similarities with communities I engage with, so the adjustment should be minimal.",
          blog_id: 999999,
          blog_questions_id: 999994
        }),
        knex('blog-answers').insert({
          id: 999993,
          answer: "No. I knew from the start that the point was to shake up the way education is delivered. Ever since I got to engage with my cohort, any trepidation I might have had was overshadowed by the excitement about all the possibilities this type of engagement would have.",
          blog_id: 999999,
          blog_questions_id: 999993
        }),
        knex('blog-answers').insert({
          id: 999992,
          answer: "Absolutely ecstatic! EDA has opened up a new playground for me. I realise now that I have access to resources and training opportunities, accessible at will from a global network of information. And there are people out there, even beyond EDA who are happy and willing to lend a hand. It also doesn't hurt that my cohort has been colossaly amazing. NIKAU!!!",
          blog_id: 999999,
          blog_questions_id: 999992
        }),
// ^^^ C1 - First Reflections (999999)  ^^^
        knex('blog-answers').insert({
          id: 999997,
          answer: "I've managed to stumble into the Growth Mindset on accident (or maybe not?). I've had success jumping into phase-0 with this in mind and have been playing around with resources and tools ever since I applied. (it's really just treating study like play time) I'm also planning out the future in increments.  The Toggl timer in conjunction with the Pomodoro technique was another one of those techniques that I tried out.",
          blog_id: 999998,
          blog_questions_id: 999997
        }),
        knex('blog-answers').insert({
          id: 999991,
          answer: "The Pomodoro technique has been pretty cool. (I'm loosey-goosey with the breaks, though. XD) Sometimes I get to the end of a 25 minute period and i'm relieved that I can feel good about taking a break to just mess around for a bit. Then there's those times that I eloquently discuss an alternative with the timer; \"SHUTUPI'MNOTDONE\" and keep going. (don't hold that against me :P) As mentioned, I've got a Growth Mindset going into this journey, but I think I like the idea of how Meditation and Mindfulness could also be nice supporting techniques to leverage. I've dabbled a bit in each and I am feeling Mindfulness > Meditation at the moment. I think there are ways I can apply Mindfulness such that I can support what i'm currently learning, but still lay the foundations to start focusing on developing other skills later on.",
          blog_id: 999998,
          blog_questions_id: 999991
        }),
        knex('blog-answers').insert({
          id: 999990,
          answer: "My version of Pomodoro, which I shall dub the Formaggio (because tomato and cheese sandwich, that's why!) technique, where I might sometimes play fast and loose with how I handle breaks. Also, having the mindset of do first then assess yourself has been very familiar to me. (It's very much a gaming mindset, I think)",
          blog_id: 999998,
          blog_questions_id: 999990
        }),
        knex('blog-answers').insert({
          id: 999989,
          answer: "Pomodoro has been really good. Not only for tracking time, but feeling great that I know for sure that when I think back to what I did during a particular day I can think: I was awesome today! And I have Toggl as proof! Of course I also wanna get back into doing Mindfulness training and maybe look into Meditation again.",
          blog_id: 999998,
          blog_questions_id: 999989
        }),
// ^^^ C1 - Time and Habits (999998)  ^^^
        knex('blog-answers').insert({
          id: 999996,
          answer: "That we really need to rethink how we define intelligence to be inclusive of factors beyond intellect and that the world seems to be getting less monochrome, so to speak.<br>There's also a lot to be said about the value of taking time away from task and objective oriented thinking to just focusing on awareness. To knowing all the intimate little details that your brain can process that normally get filtered out when we work just to accomplish a goal.",
          blog_id: 999997,
          blog_questions_id: 999996
        }),
        knex('blog-answers').insert({
          id: 999988,
          answer: "It's nice to take time away from work, especially when you do it just to feel alive again. To take time and ponder what your body feels and what emotions wash over when you take in what's around you.",
          blog_id: 999997,
          blog_questions_id: 999988
        }),
// ^^^ C2 - Emotional Intelligence (999997)  ^^^
        knex('blog-answers').insert({
          id: 999995,
          answer: "My site looks like a butt at the moment. :/ If I wasn't focusing my attention on the actual process of making the site work, I think I'd get a lot more caught up on random little things; Like the colour doesn't look so great, or that post isn't quite centered. I could have wasted a lot of time that could be spent building the site.",
          blog_id: 999996,
          blog_questions_id: 999995
        }),
        knex('blog-answers').insert({
          id: 999987,
          answer: "I was never too impressed about the practice. It's the kind of thing that's very much associated with mysticism and superstition, but if there are good, measurable outcomes, then I think it's worth looking into.",
          blog_id: 999996,
          blog_questions_id: 999987
        }),
        knex('blog-answers').insert({
          id: 999986,
          answer: "I've heard of it being suggested by psychotherapists as a way to combat depression, so I get how it's associated with more positive emotions. Emotional control/mastery was also an easy one to realise, seeing that the whole point is to be aware of and control ones reactions to external stimuli during meditation.",
          blog_id: 999996,
          blog_questions_id: 999986
        }),
        knex('blog-answers').insert({
          id: 999985,
          answer: "Focusing on one's intention to start off was probably the most helpful to me since I started off a bit more skeptical about the meditation stuff. It's also a bit more familiar to my usual way of goal-oriented thinking. It helps me to stay in-the-zone if I have an idea of what I want to get out of the experience.",
          blog_id: 999996,
          blog_questions_id: 999985
        }),
        knex('blog-answers').insert({
          id: 999984,
          answer: "I'm a bit of a rebel, so I come up with my own meditation training situations for these bits. ;) Like, for this time around, instead of focusing on breathing I put focus on my sight; so I picked up one of my art books (Heart of the Swarm) with the attention of just appreciating the composition of the art in it.",
          blog_id: 999996,
          blog_questions_id: 999984
        })
// ^^^ C3 - The Process of Meditation (999996)  ^^^
      ]);
    });
};
