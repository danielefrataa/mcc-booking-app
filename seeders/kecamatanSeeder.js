import { Kecamatan, Kota } from '../models/index.js';

async function seedKecamatan() {
  try {
    // Dapatkan ID untuk ketiga kota
    const kotaMalang = await Kota.findOne({ where: { nama_kota: 'Kota Malang' } });
    const kabMalang = await Kota.findOne({ where: { nama_kota: 'Kabupaten Malang' } });
    const kotaBatu = await Kota.findOne({ where: { nama_kota: 'Kota Batu' } });
    
    if (!kotaMalang || !kabMalang || !kotaBatu) {
      throw new Error('Salah satu kota tidak ditemukan! Pastikan seeder kota sudah dijalankan.');
    }

    const kecamatanData = [
      // Kecamatan Kota Malang
      { nama_kecamatan: 'Blimbing', id_kota: kotaMalang.id },
      { nama_kecamatan: 'Klojen', id_kota: kotaMalang.id },
      { nama_kecamatan: 'Kedungkandang', id_kota: kotaMalang.id },
      { nama_kecamatan: 'Sukun', id_kota: kotaMalang.id },
      { nama_kecamatan: 'Lowokwaru', id_kota: kotaMalang.id },

      // Kecamatan Kabupaten Malang
      { nama_kecamatan: 'Ampelgading', id_kota: kabMalang.id },
      { nama_kecamatan: 'Bantur', id_kota: kabMalang.id },
      { nama_kecamatan: 'Bululawang', id_kota: kabMalang.id },
      { nama_kecamatan: 'Dampit', id_kota: kabMalang.id },
      { nama_kecamatan: 'Dau', id_kota: kabMalang.id },
      { nama_kecamatan: 'Donomulyo', id_kota: kabMalang.id },
      { nama_kecamatan: 'Gedangan', id_kota: kabMalang.id },
      { nama_kecamatan: 'Gondanglegi', id_kota: kabMalang.id },
      { nama_kecamatan: 'Jabung', id_kota: kabMalang.id },
      { nama_kecamatan: 'Kalipare', id_kota: kabMalang.id },
      { nama_kecamatan: 'Karangploso', id_kota: kabMalang.id },
      { nama_kecamatan: 'Kasembon', id_kota: kabMalang.id },
      { nama_kecamatan: 'Kepanjen', id_kota: kabMalang.id },
      { nama_kecamatan: 'Kromengan', id_kota: kabMalang.id },
      { nama_kecamatan: 'Lawang', id_kota: kabMalang.id },
      { nama_kecamatan: 'Ngajum', id_kota: kabMalang.id },
      { nama_kecamatan: 'Ngantang', id_kota: kabMalang.id },
      { nama_kecamatan: 'Pagak', id_kota: kabMalang.id },
      { nama_kecamatan: 'Pagelaran', id_kota: kabMalang.id },
      { nama_kecamatan: 'Pakis', id_kota: kabMalang.id },
      { nama_kecamatan: 'Pakisaji', id_kota: kabMalang.id },
      { nama_kecamatan: 'Poncokusumo', id_kota: kabMalang.id },
      { nama_kecamatan: 'Pujon', id_kota: kabMalang.id },
      { nama_kecamatan: 'Singosari', id_kota: kabMalang.id },
      { nama_kecamatan: 'Sumbermanjing Wetan', id_kota: kabMalang.id },
      { nama_kecamatan: 'Sumberpucung', id_kota: kabMalang.id },
      { nama_kecamatan: 'Tajinan', id_kota: kabMalang.id },
      { nama_kecamatan: 'Tirtoyudo', id_kota: kabMalang.id },
      { nama_kecamatan: 'Tumpang', id_kota: kabMalang.id },
      { nama_kecamatan: 'Turen', id_kota: kabMalang.id },
      { nama_kecamatan: 'Wagir', id_kota: kabMalang.id },
      { nama_kecamatan: 'Wajak', id_kota: kabMalang.id },
      { nama_kecamatan: 'Wonosari', id_kota: kabMalang.id },

      // Kecamatan Kota Batu
      { nama_kecamatan: 'Batu', id_kota: kotaBatu.id },
      { nama_kecamatan: 'Bumiaji', id_kota: kotaBatu.id },
      { nama_kecamatan: 'Junrejo', id_kota: kotaBatu.id }
    ];

    await Kecamatan.bulkCreate(kecamatanData);
    console.log('✅ Kecamatan data seeded!');
  } catch (error) {
    console.error('❌ Error seeding kecamatan data:', error);
    throw error;
  }
}

export default seedKecamatan; 