import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

// 1. Load ENV dengan path absolut
const envPath = path.resolve(process.cwd(), '.env');
dotenv.config({ path: envPath });

// 2. Validasi Environment Variables
const requiredVars = ['DB_URL', 'JWT_SECRET'];
requiredVars.forEach(varName => {
  if (!process.env[varName]) {
    throw new Error(`Missing required env var: ${varName}`);
  }
});

// 3. Konfigurasi SSL dinamis
const sslConfig = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
} : {};

// 4. Inisialisasi Sequelize dengan logging
const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  ...sslConfig,
  logging: process.env.NODE_ENV === 'development' ? console.log : false
});

export default sequelize;