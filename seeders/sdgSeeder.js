import { SDG } from '../models/index.js';

const sdgData = [
  { nama_sdg: 'No Poverty', deskripsi: 'Mengakhiri kemiskinan dalam segala bentuk di manapun' },
  { nama_sdg: 'Zero Hunger', deskripsi: 'Mengakhiri kelaparan, mencapai ketahanan pangan dan nutrisi yang lebih baik dan mendukung pertanian berkelanjutan' },
  { nama_sdg: 'Good Health and Well-being', deskripsi: 'Memastikan kehidupan yang sehat dan mendukung kesejahteraan bagi semua untuk semua usia' },
  { nama_sdg: 'Quality Education', deskripsi: 'Memastikan pendidikan yang inklusif dan berkualitas setara, juga mendukung kesempatan belajar seumur hidup bagi semua' },
  { nama_sdg: 'Gender Equality', deskripsi: 'Mencapai kesetaraan gender dan memberdayakan semua perempuan dan anak perempuan' },
  { nama_sdg: 'Clean Water and Sanitation', deskripsi: 'Memastikan ketersediaan dan manajemen air bersih yang berkelanjutan dan sanitasi bagi semua' },
  { nama_sdg: 'Affordable and Clean Energy', deskripsi: 'Memastikan akses terhadap energi yang terjangkau, bisa diandalkan, berkelanjutan dan modern bagi semua' },
  { nama_sdg: 'Decent Work and Economic Growth', deskripsi: 'Mendukung pertumbuhan ekonomi yang inklusif dan berkelanjutan, tenaga kerja penuh dan produktif dan pekerjaan yang layak bagi semua' },
  { nama_sdg: 'Industry, Innovation and Infrastructure', deskripsi: 'Membangun infrastruktur yang tangguh, mendukung industrialisasi yang inklusif dan berkelanjutan dan membantu perkembangan inovasi' },
  { nama_sdg: 'Reduced Inequality', deskripsi: 'Mengurangi ketimpangan baik di dalam maupun antarnegara' },
  { nama_sdg: 'Sustainable Cities and Communities', deskripsi: 'Membangun kota dan pemukiman yang inklusif, aman, tangguh dan berkelanjutan' },
  { nama_sdg: 'Responsible Consumption and Production', deskripsi: 'Memastikan pola konsumsi dan produksi yang berkelanjutan' },
  { nama_sdg: 'Climate Action', deskripsi: 'Mengambil aksi segera untuk memerangi perubahan iklim dan dampaknya' },
  { nama_sdg: 'Life Below Water', deskripsi: 'Melestarikan dan menggunakan secara berkelanjutan sumber daya laut, samudra dan maritim untuk pembangunan yang berkelanjutan' },
  { nama_sdg: 'Life on Land', deskripsi: 'Melindungi, memulihkan dan mendukung penggunaan yang berkelanjutan terhadap ekosistem daratan' },
  { nama_sdg: 'Peace, Justice and Strong Institutions', deskripsi: 'Mendukung masyarakat yang damai dan inklusif untuk pembangunan berkelanjutan, menyediakan akses terhadap keadilan bagi semua dan membangun institusi-institusi yang efektif, akuntabel dan inklusif di semua tingkatan' },
  { nama_sdg: 'Partnerships for the Goals', deskripsi: 'Memperkuat implementasi dan merevitalisasi kemitraan global untuk pembangunan berkelanjutan' }
];

async function seedSDG() {
  try {
    await SDG.bulkCreate(sdgData);
    console.log('✅ SDG data seeded!');
  } catch (error) {
    console.error('❌ Error seeding SDG data:', error);
    throw error;
  }
}

export default seedSDG; 