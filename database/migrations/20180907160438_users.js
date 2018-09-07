
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('username', 64)
    table.string('first_name', 64)
    table.string('last_name', 64)
    table.string('email')
    table.string('password', 500)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
