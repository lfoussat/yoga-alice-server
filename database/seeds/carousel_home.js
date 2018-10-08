
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('carousel_home').del()
    .then(() => {
      // Inserts seed entries
      return knex('carousel_home').insert([
        {
          id: 1,
          created_at: new Date(),
          title: 'Alice pont',
          image_url: `yoga-alice-carr-5.jpg`,
          uid: 1,
          draft_title: 'Alice pont',
          draft_image_url: `yoga-alice-carr-5.jpg`,
          draft_uid: 1,
          is_draft: false,
        },
        {
          id: 2,
          created_at: new Date(),
          title: 'Alice mains',
          image_url: `yoga-alice-carr-2.jpg`,
          uid: 2,
          draft_title: 'Alice mains',
          draft_image_url: `yoga-alice-carr-2.jpg`,
          draft_uid: 2,
          is_draft: false,
        },
        {
          id: 3,
          created_at: new Date(),
          title: 'Alice allongée',
          image_url: `yoga-alice-carr-3.jpg`,
          uid: 3,
          draft_title: 'Alice allongée',
          draft_image_url: `yoga-alice-carr-3.jpg`,
          draft_uid: 3,
          is_draft: false,
        },
        {
          id: 4,
          created_at: new Date(),
          title: 'Alice cours',
          image_url: `yoga-alice-carr-4.jpg`,
          uid: 4,
          draft_title: 'Alice cours',
          draft_image_url: `yoga-alice-carr-4.jpg`,
          draft_uid: 4,
          is_draft: false,
        }
      ])
    })
}
