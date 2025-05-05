// sequelize.config.js
const dbConfig = {
  production: {
    url: process.env.DB_URI,
    dialect: 'postgres',
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
  },
  development: {
    url: 'postgres://postgres:postgres@localhost:5432/db_malang',
    dialect: 'postgres'
  }
};

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(dbConfig[env].url, dbConfig[env]);