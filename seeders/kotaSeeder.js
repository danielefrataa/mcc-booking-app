import { Kota } from '../models/index.js';

const kotaData = [
  { nama_kota: 'Kota Malang' },
  { nama_kota: 'Kabupaten Malang' },
  { nama_kota: 'Kota Batu' },
];

async function seedKota() {
  try {
    await Kota.bulkCreate(kotaData);
    console.log('✅ Kota data seeded!');
  } catch (error) {
    console.error('❌ Error seeding kota data:', error);
    throw error;
  }
}

export default seedKota; 