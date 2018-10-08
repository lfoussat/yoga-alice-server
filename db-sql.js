const knex = require('./database/knex.js')
const _ = require('lodash')

const camelSnake = obj => _.mapKeys(obj, (value, key) => _.camelCase(key))

const getHomeDataFO = async () => {
  const carousel = await knex('carousel_home')
    .select('title', 'image_url', 'uid')
  const slides = carousel
    .map(s => camelSnake(s))
    .sort((a, b) => a.uid - b.uid)
    .map(s => ({ title: s.title, imageUrl: s.imageUrl }))
  const quotations = await knex('quotations')
    .select('ref', 'quotation', 'caption')
  const contact = await knex('contact_home')
    .select('title', 'content', 'fbk_btn_link', 'email_btn_link')
  const blocs = await knex('home_blocs')
    .select('ref', 'title', 'content', 'image_url', 'btn_text', 'btn_link')

  const home = {
    carousel: slides,
    quotations: quotations,
    blocs: blocs.map(camelSnake),
    contact: contact.map(camelSnake)[0]
  }

  return home
}

const getHomeDataBO = async () => {
  const carousel = await knex('carousel_home')
    .select('draft_title', 'draft_image_url', 'draft_uid', 'is_draft')
  const slides = carousel
    .map(s => camelSnake(s))
    .sort((a, b) => a.draftUid - b.draftUid)
    //.map(s => ({ draftTitle: s.draftTitle, draftImageUrl: s.draftImageUrl }))
  const quotations = await knex('quotations')
    .select('ref', 'draft_quotation', 'draft_caption', 'is_draft')
  const contact = await knex('contact_home')
    .select('title', 'draft_content', 'draft_fbk_btn_link', 'draft_email_btn_link', 'is_draft')
  const blocs = await knex('home_blocs')
    .select('ref', 'draft_title', 'draft_content', 'draft_image_url', 'draft_btn_text', 'draft_btn_link', 'is_draft')

  const home = {
    carousel: slides,
    quotations: quotations,
    blocs: blocs.map(camelSnake),
    contact: contact.map(camelSnake)[0]
  }

  return home
}

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
  createUser,
  getHomeDataFO,
  getHomeDataBO
}
