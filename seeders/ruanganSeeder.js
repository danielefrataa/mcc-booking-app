import { Ruangan } from '../models/index.js';

const ruanganData = [
  {
    nama_ruangan: 'Auditorium',
    kapasitas: '300',
    ukuran: 400,
    biaya_sewa: 'free',
    detail_ruangan: 'Auditorium utama untuk event besar',
    pic: 'Budi',
    lantai: '1',
    fasilitas: 'Sound System, Proyektor, AC, Kursi, Panggung',
    gambar: 'auditorium.jpg',
    status: 'available',
    created_at: new Date(),
    update_at: new Date()
  },
  {
    nama_ruangan: 'Ruang Workshop 1',
    kapasitas: '40',
    ukuran: 60,
    biaya_sewa: 'free',
    detail_ruangan: 'Ruang workshop untuk pelatihan',
    pic: 'Sari',
    lantai: '2',
    fasilitas: 'Meja, Kursi, Whiteboard, AC',
    gambar: 'workshop1.jpg',
    status: 'available',
    created_at: new Date(),
    update_at: new Date()
  },
  {
    nama_ruangan: 'Ruang Meeting 1',
    kapasitas: '20',
    ukuran: 30,
    biaya_sewa: 'free',
    detail_ruangan: 'Ruang meeting kecil',
    pic: 'Andi',
    lantai: '2',
    fasilitas: 'Meja, Kursi, TV, AC',
    gambar: 'meeting1.jpg',
    status: 'available',
    created_at: new Date(),
    update_at: new Date()
  },
  {
    nama_ruangan: 'Ruang Podcast',
    kapasitas: '6',
    ukuran: 15,
    biaya_sewa: 'free',
    detail_ruangan: 'Ruang podcast dengan soundproof',
    pic: 'Dewi',
    lantai: '3',
    fasilitas: 'Meja, Kursi, Mic, Soundproof',
    gambar: 'podcast.jpg',
    status: 'available',
    created_at: new Date(),
    update_at: new Date()
  },
  {
    nama_ruangan: 'Ruang Galeri',
    kapasitas: '100',
    ukuran: 120,
    biaya_sewa: 'free',
    detail_ruangan: 'Galeri seni dan pameran',
    pic: 'Rina',
    lantai: '1',
    fasilitas: 'Display, Lighting, AC',
    gambar: 'galeri.jpg',
    status: 'available',
    created_at: new Date(),
    update_at: new Date()
  }
];

export default async function seedRuangan() {
  for (const data of ruanganData) {
    await Ruangan.findOrCreate({ where: { nama_ruangan: data.nama_ruangan }, defaults: data });
  }
  console.log('✅ Ruangan Malang Creative Center data seeded!');
} 