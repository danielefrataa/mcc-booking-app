'use strict';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import Sequelize from 'sequelize';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const env = process.env.NODE_ENV || 'development';

// Import config
import configJson from '../config/config.json' assert { type: 'json' };
const config = configJson[env];

// Initialize Sequelize
const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

// Import semua model
import User from './User.js';
import Kota from './Kota.js';
import Kecamatan from './Kecamatan.js';
import Kategori from './Kategori.js';
import SubSektor from './SubSektor.js';
import Ruangan from './Ruangan.js';
import Booking from './Booking.js';
import SDG from './SDG.js';
import SubsektorSDG from './SubsektorSDG.js';

// Inisialisasi model
const models = {
  User,
  Kota,
  Kecamatan,
  Kategori,
  SubSektor,
  Ruangan,
  Booking,
  SDG,
  SubsektorSDG
};

// Setup associations
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

const db = {
  sequelize,
  Sequelize,
  ...models
};

export default db;
export {
  User,
  Kota,
  Kecamatan,
  Kategori,
  SubSektor,
  Ruangan,
  Booking,
  SDG,
  SubsektorSDG
};
