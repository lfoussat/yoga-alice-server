const path = require('path')

const inspirationsDir = path.join(__dirname, 'database/inspirations')

const inspirations = [
  require(path.join(inspirationsDir, 'inspiration1.json')),
  require(path.join(inspirationsDir, 'inspiration2.json')),
  require(path.join(inspirationsDir, 'inspiration3.json'))
]

const getInspirations = () => Promise.resolve(inspirations)

module.exports = {
  getInspirations
}
