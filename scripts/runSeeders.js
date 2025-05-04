import seedKota from '../seeders/kotaSeeder.js';
import seedKecamatan from '../seeders/kecamatanSeeder.js';
import seedKategori from '../seeders/kategoriSeeder.js';
import seedSDG from '../seeders/sdgSeeder.js';  
import seedSubsektor from '../seeders/subsektorSeeder.js';
import seedRuangan from '../seeders/ruanganSeeder.js';

async function runSeeders() {
  try {
    console.log('🌱 Starting seeding process...\n');

    // Jalankan seeder secara berurutan
    await seedKota();
    await seedKecamatan();
    await seedKategori();
    await seedSDG();
    await seedSubsektor();
    await seedRuangan();

    console.log('\n✅ All seeders completed successfully!');
  } catch (error) {
    console.error('\n❌ Error running seeders:', error);
    throw error;
  }
}

export default runSeeders;

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runSeeders()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
} 