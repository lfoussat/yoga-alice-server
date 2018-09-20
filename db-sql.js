const knex = require('./database/knex.js')
const _ = require('lodash')

const camelSnake = obj => _.mapKeys(obj, (value, key) => _.camelCase(key))

const getInspirations = async () => {
  const inspirations = await knex('inspirations')
    .select()
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

// const updateInspiration = inspiration => {
//   const filename = `inspiration${inspiration.id}.json`
//   const filepath = path.join(inspirationsDir, filename)

//   return writeFile(filepath, JSON.stringify(inspiration, null, 2), 'utf8')
// }

// const updateInspirationInfo = async (inspirationId, inspirationInfo, newPicture) => {
//   return getInspirationById(inspirationId)
//     .then(inspiration => {
//       inspiration.picture = newPicture ? newPicture.filename : inspiration.picture || 'default.jpg'
//       inspiration.title = inspirationInfo.title ? inspirationInfo.title : inspiration.title
//       inspiration.smalldescription = inspirationInfo.smalldescription ? inspirationInfo.smalldescription : inspiration.smalldescription
//       inspiration.description = inspirationInfo.description ? inspirationInfo.description : inspiration.description

//       return updateInspiration(inspiration)
//     })
// }
const deleteInspiration = id => knex('inspirations')
  .where('id', id)
  .del()

module.exports = {
  getInspirations,
  getInspirationById,
  getInspirationByIdForBO,
  createInspiration,
  deleteInspiration,
}
