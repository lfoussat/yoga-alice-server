
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('contact_home').del()
    .then(() => {
      // Inserts seed entries
      return knex('contact_home').insert([
        {
          id: 1,
          created_at: new Date(),
          ref: 'contact_home',
          title: 'Me contacter',
          content: 'Si vous avez la moindre question concernant les cours, les stages, ou le shiatsu à me poser, n\'hésitez pas à me contacter par email ou via Facebook. Je vous répondrai au plus vite.',
          fbk_btn_link: 'alice.yoga.shiatsu',
          email_btn_link: 'alice.ollagnon@gmail.com',
          draft_title: 'Me contacter',
          draft_content: 'Si vous avez la moindre question concernant les cours, les stages, ou le shiatsu à me poser, n\'hésitez pas à me contacter par email ou via Facebook. Je vous répondrai au plus vite.',
          draft_fbk_btn_link: 'alice.yoga.shiatsu',
          draft_email_btn_link: 'alice.ollagnon@gmail.com',
          is_draft: false,
        }
      ])
    })
}
