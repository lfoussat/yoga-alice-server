
exports.up = function (knex, Promise) {
  return knex.schema.table('inspirations', table => {
    table.string('draft_title', 64)
    table.string('draft_small_description')
    table.text('draft_description')
    table.string('draft_image_url', 500)
    table.string('draft_color', 64)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('inspirations', table => {
    table.dropColumn('draft_title')
    table.dropColumn('draft_small_description')
    table.dropColumn('draft_description')
    table.dropColumn('draft_image_url')
    table.dropColumn('draft_color')
  })
}
