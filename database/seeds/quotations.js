
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('quotations').del()
    .then(() => {
      // Inserts seed entries
      return knex('quotations').insert([
        {
          id: 1,
          created_at: new Date(),
          ref: 'alice_quotation',
          quotation: 'Exploration somatique. Intuition. Mouvement libre. Yoga organique. Shiatsu. Curiosité.',
          caption: '',
          draft_quotation: 'Exploration somatique. Intuition. Mouvement libre. Yoga organique. Shiatsu. Curiosité.',
          draft_caption: '',
          is_draft: false,
        },
        {
          id: 2,
          created_at: new Date(),
          ref: 'student_quotation',
          quotation: '"Des cours qui réveillent tout le corps, donnent la pêche et permettent aussi des moments de détente tout en douceur! Un dosage parfait! Merci Alice!"',
          caption: 'Julie, Cours du mardi',
          draft_quotation: '"Des cours qui réveillent tout le corps, donnent la pêche et permettent aussi des moments de détente tout en douceur! Un dosage parfait! Merci Alice!"',
          draft_caption: 'Julie, Cours du mardi',
          is_draft: false,
        }
      ])
    })
}
