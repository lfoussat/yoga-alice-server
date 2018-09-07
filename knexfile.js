const path = require('path')
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      charset: 'utf8',
      database: 'yoga-alice-db'
    },
    migrations: {
      directory: path.join(__dirname, '/database/migrations')
      // directory: './migrations'
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds')
      // directory: './seeds'
    }
  },
  migrations: {
    directory: path.join(__dirname, '/database/migrations')
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, '/database/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds')
    }
  }
}
