
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('inspirations').del()
    .then(() => {
      // Inserts seed entries
      return knex('inspirations').insert([
        {
          id: 1,
          created_at: new Date(),
          title: 'Love this video',
          small_description: 'Sed do eiusmod tempor.',
          description: 'Its about how yoga is good for your body and your soul',
          image_url: 'https://pbs.twimg.com/profile_images/685018005990993920/bQzEIcoY_normal.jpg',
          color: '#D3F6DB',
          user_id: 1
        },
        {
          id: 2,
          created_at: new Date(),
          title: 'A beautiful book',
          small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua.',
          description: 'I recommand you this beautiful book which explains perfectly how to practice vinyasa yoga at home.',
          image_url: '',
          color: '#c1eeff',
          user_id: 1
        },
        {
          id: 3,
          created_at: new Date(),
          title: 'A nice place for a retreat',
          small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          description: 'I discovered this place a week ago and wanted to talk about it...',
          image_url: '',
          color: '#f1f7ed',
          user_id: 1
        }
      ])
    })
}
