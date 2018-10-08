
exports.up = function (knex, Promise) {
  return knex.schema.createTable('carousel_home', table => {
    table.increments()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('title', 64)
    table.string('image_url', 500)
    table.integer('uid')
    table.string('draft_title', 64)
    table.string('draft_image_url', 500)
    table.integer('draft_uid')
    table.boolean('is_draft')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('carousel_home')
}
