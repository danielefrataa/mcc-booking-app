import { Kategori } from '../models/index.js';

const kategoriData = [
  { nama_kategori: 'Aplikasi dan Game Developer' },
  { nama_kategori: 'Arsitektur' },
  { nama_kategori: 'Desain Interior' },
  { nama_kategori: 'Desain Komunikasi Visual' },
  { nama_kategori: 'Desain Produk' },
  { nama_kategori: 'Fashion' },
  { nama_kategori: 'Film, Animasi dan Video' },
  { nama_kategori: 'Fotografi' },
  { nama_kategori: 'Kriya' },
  { nama_kategori: 'Kuliner' },
  { nama_kategori: 'Musik' },
  { nama_kategori: 'Penerbitan' },
  { nama_kategori: 'Periklanan' },
  { nama_kategori: 'Seni Pertunjukan' },
  { nama_kategori: 'Seni Rupa' },
  { nama_kategori: 'Televisi dan Radio' }
];

async function seedKategori() {
  try {
    await Kategori.bulkCreate(kategoriData);
    console.log('✅ Kategori data seeded!');
  } catch (error) {
    console.error('❌ Error seeding kategori data:', error);
    throw error;
  }
}

export default seedKategori; 