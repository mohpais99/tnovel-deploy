require('dotenv').config()
const path = require('path');

const developmentConfig = {
    database: process.env.DB_NAME,
    user:     process.env.DB_USER,
    password: process.env.DB_PASS
}

const productionConfig = process.env.DB_URLS

module.exports = {
  development: {
    client: 'postgresql',
    connection: developmentConfig,
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: productionConfig,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
