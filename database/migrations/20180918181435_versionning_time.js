
exports.up = function (knex, Promise) {
  return knex.schema.table('inspirations', table => {
    table.boolean('is_draft')
    table.timestamp('modification_date').defaultTo(knex.fn.now())
    table.timestamp('publication_date')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('inspirations', table => {
    table.dropColumn('is_draft')
    table.dropColumn('modification_date')
    table.dropColumn('publication_date')
  })
}
