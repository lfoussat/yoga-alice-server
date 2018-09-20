
exports.seed = function (knex, Promise) {
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
          image_url: `alice-foret.jpg`,
          color: '#D3F6DB',
          draft_title: 'Love this video',
          draft_small_description: 'Sed do eiusmod tempor.',
          draft_description: 'Its about how yoga is good for your body and your soul',
          draft_image_url: `alice-foret.jpg`,
          draft_color: '#D3F6DB',
          is_draft: false,
          publication_date: new Date(),
          modification_date: new Date(),
          user_id: 1
        },
        {
          id: 2,
          created_at: new Date(),
          title: 'A beautiful book',
          small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua.',
          description: 'I recommand you this beautiful book which explains perfectly how to practice vinyasa yoga at home.',
          image_url: `alice-champs.jpg`,
          color: '#c1eeff',
          draft_title: 'A beautiful book maaaan',
          draft_small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua.',
          draft_description: 'I recommand you this beautiful book which explains perfectly how to practice vinyasa yoga at home.',
          draft_image_url: `alice-champs.jpg`,
          draft_color: '#D3F6DB',
          is_draft: true,
          modification_date: new Date(),
          user_id: 1
        },
        {
          id: 3,
          created_at: new Date(),
          title: 'A nice place for a retreat',
          small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          description: 'I discovered this place a week ago and wanted to talk about it...',
          image_url: `IMG_3678.jpg`,
          color: '#f1f7ed',
          draft_title: 'A nice place for a retreat bro',
          draft_small_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          draft_description: 'I discovered this place a week ago and wanted to talk about it...',
          draft_image_url: `alice-champs.jpg`,
          draft_color: '#f1f7ed',
          is_draft: true,
          publication_date: new Date(),
          modification_date: new Date(),
          user_id: 1
        }
      ])
    })
}
