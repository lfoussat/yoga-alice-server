const fs = require('fs')
const path = require('path')
const util = require('util')
const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const inspirationsDir = path.join(__dirname, 'database/inspirations')

const getInspirations = () => {
  return readdir(inspirationsDir, `utf8`)
    .then(inspirations => Promise.all(inspirations
      .map(inspiration => path.join(inspirationsDir, inspiration))
      .map(inspirationpath => readFile(inspirationpath, 'utf8'))))
    .then(inspirationsListValue => inspirationsListValue.map(inspiration => JSON.parse(inspiration)))
}

const addInspiration = async inspiration => {
  const inspirations = await getInspirations()

  inspiration.id = inspirations.length + 1

  const filename = `inspiration${inspirations.length + 1}.json`
  const filepath = path.join(inspirationsDir, filename)

  return writeFile(filepath, JSON.stringify(inspiration, null, 2), 'utf8')
}

const getInspirationById = id => {
  const filename = `inspiration${id}.json`
  const filepath = path.join(inspirationsDir, filename)

  return readFile(filepath, 'utf8').then(JSON.parse)
}

const updateInspiration = inspiration => {
  const filename = `inspiration${inspiration.id}.json`
  const filepath = path.join(inspirationsDir, filename)

  return writeFile(filepath, JSON.stringify(inspiration, null, 2), 'utf8')
}

const updateInspirationInfo = async (inspirationId, inspirationInfo, newPicture) => {
  return getInspirationById(inspirationId)
    .then(inspiration => {
      inspiration.picture = newPicture ? newPicture.filename : inspiration.picture || 'default.jpg'
      inspiration.title = inspirationInfo.title ? inspirationInfo.title : inspiration.title
      inspiration.smalldescription = inspirationInfo.smalldescription ? inspirationInfo.smalldescription : inspiration.smalldescription
      inspiration.description = inspirationInfo.description ? inspirationInfo.description : inspiration.description

      return updateInspiration(inspiration)
    })
}

module.exports = {
  getInspirations,
  addInspiration,
  updateInspirationInfo
}
