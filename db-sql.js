const knex = require('./database/knex.js')
const _ = require('lodash')

const camelSnake = obj => _.mapKeys(obj, (value, key) => _.camelCase(key))

const getInspirations = async () => {
  const inspirations = await knex('inspirations')
    .select()
  console.log(inspirations)
  return inspirations.map(camelSnake)
}

const addInspiration = params => knex('inspirations')
  .returning('id', 'title', 'small_description', 'description', 'color', 'image_url')
  .insert(params)

const getInspirationById = async id => {
  const inspiration = await knex
    .select()
    .table('inspirations')
    .where('id', id)
    .returning('id', 'title', 'small_description', 'description', 'color', 'image_url')
  console.log(inspiration)
  return inspiration.camelSnake()
}

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

module.exports = {
  getInspirations,
  addInspiration
}
