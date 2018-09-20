const knex = require('./database/knex.js')
const _ = require('lodash')

const camelSnake = obj => _.mapKeys(obj, (value, key) => _.camelCase(key))

const getInspirations = async () => {
  const inspirations = await knex('inspirations')
    .select()
  return inspirations.map(camelSnake)
}


const getInspirationById = async id => {
  const inspiration = await knex
    .select()
    .table('inspirations')
    .where('id', id)
    .returning('id', 'title', 'small_description', 'description', 'color', 'image_url')
  return inspiration.camelSnake()
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
  addInspiration,
  getInspirationById
  createInspiration,
  deleteInspiration,
}
