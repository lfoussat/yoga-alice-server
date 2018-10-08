
exports.up = function (knex, Promise) {
  return knex.schema.createTable('quotations', table => {
    table.increments()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('ref', 35)
    table.string('quotation', 255)
    table.string('caption', 64)
    table.string('draft_quotation', 255)
    table.string('draft_caption', 64)
    table.boolean('is_draft')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('quotations')
}
