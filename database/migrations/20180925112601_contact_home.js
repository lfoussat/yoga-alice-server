
exports.up = function (knex, Promise) {
  return knex.schema.createTable('contact_home', table => {
    table.increments()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('ref', 35)
    table.string('title', 64)
    table.string('content', 500)
    table.string('fbk_btn_link', 30)
    table.string('email_btn_link')
    table.string('draft_title', 64)
    table.string('draft_content', 500)
    table.string('draft_fbk_btn_link', 30)
    table.string('draft_email_btn_link')
    table.boolean('is_draft')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('contact_home')
}
