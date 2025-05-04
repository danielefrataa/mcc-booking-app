import sequelize from '../config/sequelize.config.js';

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');
    
    // Get list of all tables
    const tables = await sequelize.getQueryInterface().showAllTables();
    console.log('\n📋 Tables in database:');
    tables.forEach(table => {
      console.log(`- ${table}`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    process.exit(1);
  }
}

testConnection(); 