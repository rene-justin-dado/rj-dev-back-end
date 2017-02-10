
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
          answer: "I'm in love with the system already. It actually hits very close to home, I think. As a gamer, having been part of several gaming communities, I've drawn a few comparisons between EDA and the communities I've experienced. While the goal in gaming is mainly to have fun (unless you're 'that' type of person... XD), part of the experience is learning the rules of a game, testing out new things and developing skills that are useful within the game world. EDA, I feel, seems to build a community where fun, experimentation and skill development are simply applied to the real world, rather than a virtual one.",
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
          answer: "That we really need to rethink how we define intelligence to be inclusive of factors beyond intellect and that the world seems to be getting less monochrome, so to speak. There's also a lot to be said about the value of taking time away from task and objective oriented thinking to just focusing on awareness. To knowing all the intimate little details that your brain can process that normally get filtered out when we work just to accomplish a goal.",
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
        }),
// ^^^ C3 - The Process of Meditation (999996)  ^^^
        knex('blog-answers').insert({
          id: 999983,
          answer: "Using a car as an analogy: HTML would be the different parts that make up its structure. The chassis, the windows, the wheels. CSS would determine the look of the vehicle. Its paintjob, its model. Finally, the DOM would be the plans/blueprints to put the car together. Tweaks here and there allow you to make changes to the car's design and its final look.",
          blog_id: 888889,
          blog_questions_id: 999983
        }),
        knex('blog-answers').insert({
          id: 999981,
          answer: "Using a box shape as the base, one can define non-box appearances through the magic of CSS.",
          blog_id: 888889,
          blog_questions_id: 999981
        }),
// ^^^ T2 - My Technical Blog [0.1] (888889)  ^^^
        knex('blog-answers').insert({
          id: 999980,
          answer: "Grid based design, as the name suggests, is about designing pages by using a grid framework. A grid class would define the maximum width that elements inside it can take up, row would allow its child elements to change size within the grid structure, and col classes would change the elements' width according to the grid and row containers.",
          blog_id: 888888,
          blog_questions_id: 999980
        }),
        knex('blog-answers').insert({
          id: 999979,
          answer: "Because of the range of screen sizes available to users in the modern day, it becomes valuable to be able to present information based on those differences in screen sizes. Thus, it becomes good practice to allow your content to change size and/or hide/show itself according to the amount information a given screen size can display cleanly all at once.",
          blog_id: 888888,
          blog_questions_id: 999979
        }),
        knex('blog-answers').insert({
          id: 999978,
          answer: "Semantic structure is all about how one communicates the meaning of content through the presentation of it. Imagine a webpage without a semantic structure; it would be like talking to a robot. (less 'Jarvis', more HAL 9000) By adding in the semantic structure, you can teach the robot to use inflections and different tones to communicate ideas better based on context.",
          blog_id: 888888,
          blog_questions_id: 999978
        }),
        knex('blog-answers').insert({
          id: 999977,
          answer: "I definitely want to wrap my head around the grid framework better and practice semantic structure. I love story telling, so I feel it's very important to use semantic expressions no matter the medium.",
          blog_id: 888888,
          blog_questions_id: 999977
        }),
        knex('blog-answers').insert({
          id: 999976,
          answer: "While the planning could have been executed more elegantly, it was an important factor in moving forward. I had a couple things on my wishlist that I really wanted that require javascript, so it helped quite a bit to focus more on actually doing all the planning rather than worrying about how the site was turning out. It was very informative to experience development this way; it opened my eyes to the challenges that exist when putting together a site beyond just looking at someone else's design.",
          blog_id: 888887,
          blog_questions_id: 999976
        }),
        knex('blog-answers').insert({
          id: 999975,
          answer: "As the name suggests, a responsive site is one that is able to respond to different conditions that exist across different browsers and systems. For example, a responsive site would resize text or even entire sections of content in response to changes in screen size, browser orientation and other possible factors.",
          blog_id: 888887,
          blog_questions_id: 999975
        }),
        knex('blog-answers').insert({
          id: 999974,
          answer: "The 'mobile first' design philosophy is all about designing websites primarily with mobile devices in mind. The theory is that by designing for mobile first, we don't alienate people who browse the net from their mobiles or tablets and avoid a lot of other issues that come from designing with just desktops in mind. That includes, but is not limited to, dealing with an exclusively touch-screen environment, having vastly limited screen size and loading resources that wouldn't be used on mobile at all.",
          blog_id: 888887,
          blog_questions_id: 999974
        }),
        knex('blog-answers').insert({
          id: 999973,
          answer: "Frameworks are basically CSS blueprints. They are a set of CSS solutions put together, such that, simply having the appropriate semantic structure allows one to easily (HAHAHAH, easy... :P) style one's site based on what the framework is built to do.\ni.e. 'Skeleton' allows for a clean, simple, responsive site; whilst one like 'Bootstrap' offers a lot more functionality and complexity.",
          blog_id: 888887,
          blog_questions_id: 999973
        }),
        knex('blog-answers').insert({
          id: 999972,
          answer: "Kinda everything? It was a big process having to work from scratch and it was a bit of a gut-punch after having put some work into a simple site earlier on. I also had trouble with keeping my header centered. I figured out after a while that I ought to update the blog-template file with semantic structures more relevant to my own wireframes.",
          blog_id: 888887,
          blog_questions_id: 999972
        })
// ^^^ T2 - My Technical Blog [0.3] (888887)  ^^^
      ]);
    });
};
