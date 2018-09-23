const knex = require('./database/knex.js')
const _ = require('lodash')

const camelSnake = obj => _.mapKeys(obj, (value, key) => _.camelCase(key))

const getInspirations = async () => {
  const inspirations = await knex('inspirations')
    .select()

  return inspirations.map(camelSnake)
}

const getUserInspirations = async userId => {
  const inspirations = await knex('inspirations')
    .select()
    .where('user_id', userId)

  return inspirations.map(camelSnake)
}

const getInspirationById = async id => { // get inspiration for front
  const inspiration = await knex
    .select()
    .table('inspirations')
    .where('id', id)
    .returning('id', 'title', 'small_description', 'description', 'color', 'image_url', 'is_draft')

  return inspiration.map(camelSnake)[0]
}

const getInspirationByIdForBO = async id => { // get inspiration for back office
  const inspiration = await knex
    .select()
    .table('inspirations')
    .where('id', id)
    .returning('id', 'draft_title', 'draft_small_description', 'draft_description', 'draft_color', 'draft_image_url', 'is_draft', 'modification_date', 'publication_date', 'created_at')

  return inspiration.map(camelSnake)[0]
}

const createInspiration = async (params) => {
  const [ id ] = await knex
    .returning('id')
    .insert(params)
    .into('inspirations')

  return { id }
}

const updateInspiration = (id, params) => knex('inspirations')
  .where('id', id)
  .update(params)

const deleteInspiration = id => knex('inspirations')
  .where('id', id)
  .del()

// USERS

const getUsers = () => knex('users')
  .select()

const createUser = params => knex
  .returning('id')
  .insert(params)
  .into('users')

const updateUser = param => knex('users')
  .where('id', param.id)
  .update(param)

const getUserByEmail = email => knex('users')
  .select()
  .where('email', email)
  .first()

module.exports = {
  getInspirations,
  getUserInspirations,
  getInspirationById,
  getInspirationByIdForBO,
  createInspiration,
  deleteInspiration,
  updateInspiration,
  getUserByEmail,
  getUsers,
  updateUser,
  createUser
}
