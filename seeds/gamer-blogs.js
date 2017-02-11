
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gamer-blogs').del()
    .then(function () {
      return Promise.all([
        knex('gamer-blogs').insert({
          id: 777779,
          category: 'Gamer Nerd',
          title: 'Things about games',
          sub_title: 'and why I love them',
          content: 'I like mechanically good games and games with good narratives.',
          share_image: '',
          share_video: '',
          share_link: 'https://en.wikipedia.org/wiki/Video_game_culture'
        }),
        knex('gamer-blogs').insert({
          id: 777778,
          category: 'Gamer Nerd',
          title: 'The Starcraft Universe',
          sub_title: 'and what I love about it',
          content: 'I like the Zerg',
          share_image: 'QoB_Hydra',
          share_video: '',
          share_link: ''
        }),
        knex('gamer-blogs').insert({
          id: 777777,
          category: 'Gamer Nerd',
          title: 'MFPallytime',
          sub_title: 'his channel\'s cool',
          content: 'Hi frands',
          share_image: '',
          share_video: 'https://www.youtube.com/watch?v=9RDoZU0w_2U',
          share_link: ''
        })
      ])
    })
}
