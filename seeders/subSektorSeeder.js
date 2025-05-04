import { SubSektor } from '../models/index.js';

const subSektorData = [
  { nama_sub_sektor: 'Aplikasi & Pengembangan Game', id_kategori: 1 },
  { nama_sub_sektor: 'Arsitektur', id_kategori: 1 },
  { nama_sub_sektor: 'Desain Interior', id_kategori: 1 },
  { nama_sub_sektor: 'Desain Komunikasi Visual', id_kategori: 1 },
  { nama_sub_sektor: 'Desain Produk', id_kategori: 1 },
  { nama_sub_sektor: 'Fashion', id_kategori: 1 },
  { nama_sub_sektor: 'Film, Animasi & Video', id_kategori: 1 },
  { nama_sub_sektor: 'Fotografi', id_kategori: 1 },
  { nama_sub_sektor: 'Kriya', id_kategori: 1 },
  { nama_sub_sektor: 'Kuliner', id_kategori: 1 },
  { nama_sub_sektor: 'Musik', id_kategori: 1 },
  { nama_sub_sektor: 'Penerbitan', id_kategori: 1 },
  { nama_sub_sektor: 'Periklanan', id_kategori: 1 },
  { nama_sub_sektor: 'Seni Pertunjukan', id_kategori: 1 },
  { nama_sub_sektor: 'Seni Rupa', id_kategori: 1 },
  { nama_sub_sektor: 'Televisi & Radio', id_kategori: 1 },
  { nama_sub_sektor: 'Video, Fotografi & Seni Media Baru', id_kategori: 1 }
];

export default async function seedSubSektor() {
  for (const data of subSektorData) {
    await SubSektor.findOrCreate({ where: data });
  }
  console.log('✅ Sub Sektor Malang Creative Center data seeded!');
} 