import sequelize from '../config/sequelize.config.js';
import '../models/User.js';
import '../models/Kota.js';
import '../models/Kecamatan.js';
import '../models/Kategori.js';
import '../models/SubSektor.js';
import '../models/Ruangan.js';
import '../models/Booking.js';
import '../models/SDG.js';
import '../models/SubsektorSDG.js';
import runSeeders from './runSeeders.js';

async function setupDatabase() {
  try {
    console.log('🔄 Syncing database...');
    await sequelize.sync({ force: true });
    console.log('✅ Database synced successfully!');

    console.log('\n🌱 Running seeders...');
    await runSeeders();
    console.log('✅ All done!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

setupDatabase(); 