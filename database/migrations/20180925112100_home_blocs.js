
exports.up = function (knex, Promise) {
  return knex.schema.createTable('home_blocs', table => {
    table.increments()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('ref', 35)
    table.string('title', 64)
    table.string('content', 500)
    table.string('image_url', 500)
    table.string('btn_text', 30)
    table.string('btn_link', 500)
    table.string('draft_title', 64)
    table.string('draft_content', 500)
    table.string('draft_image_url', 500)
    table.string('draft_btn_text', 30)
    table.string('draft_btn_link', 500)
    table.boolean('is_draft')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('home_blocs')
}
