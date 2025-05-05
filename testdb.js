import sequelize from './config/sequelize.config.js';

async function test() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to Railway DB');
  } catch (error) {
    console.error('❌ Connection failed:', error);
  }
}

test();