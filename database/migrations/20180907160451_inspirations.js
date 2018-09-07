
exports.up = function(knex, Promise) {
    return knex.schema.createTable('inspirations', table => {
    table.increments()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('title', 64)
    table.string('small_description')
    table.text('description')
    table.string('image_url', 500)
    table.string('color', 64)
    table.integer('user_id').unsigned()

    table.foreign('user_id').references('id').inTable('users').onDelete('cascade').onUpdate('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('inspirations')
};
