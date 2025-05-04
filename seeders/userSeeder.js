import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const users = [
  // Personal Users
  {
    id: 'MCC-001',
    tipe_user: 'personal',
    nama: 'Ahmad Rizki',
    email: 'ahmad.rizki@example.com',
    password: 'password123',
    telp: '08123456789',
    alamat: 'Jl. Merdeka No. 123, Jakarta Pusat',
    facebook: 'ahmadrizki',
    instagram: '@ahmadrizki',
    twitter: '@ahmadrizki'
  },
  {
    id: 'MCC-002',
    tipe_user: 'personal',
    nama: 'Siti Nurul',
    email: 'siti.nurul@example.com',
    password: 'password123',
    telp: '08234567890',
    alamat: 'Jl. Sudirman No. 45, Jakarta Selatan',
    instagram: '@sitinurul',
    tiktok: '@sitinurul'
  },
  // Instansi Users
  {
    id: 'MCC-003',
    tipe_user: 'instansi',
    nama: 'PT Maju Bersama',
    email: 'info@majubersama.com',
    password: 'password123',
    telp: '021-5555555',
    alamat: 'Jl. Gatot Subroto No. 100, Jakarta Selatan',
    logo: 'maju-bersama-logo.png',
    nama_instansi: 'PT Maju Bersama',
    website: 'www.majubersama.com',
    deskripsi: 'Perusahaan teknologi terkemuka di Indonesia',
    id_kategori: 1,
    id_subsektor: 1,
    id_kota: 1,
    id_kecamatan: 1,
    facebook: 'majubersama',
    instagram: '@majubersama',
    twitter: '@majubersama',
    youtube: 'majubersama'
  },
  {
    id: 'MCC-004',
    tipe_user: 'instansi',
    nama: 'CV Kreatif Digital',
    email: 'contact@kreatifdigital.com',
    password: 'password123',
    telp: '021-6666666',
    alamat: 'Jl. Thamrin No. 50, Jakarta Pusat',
    logo: 'kreatif-digital-logo.png',
    nama_instansi: 'CV Kreatif Digital',
    website: 'www.kreatifdigital.com',
    deskripsi: 'Agency digital marketing dan creative design',
    id_kategori: 2,
    id_subsektor: 2,
    id_kota: 1,
    id_kecamatan: 2,
    instagram: '@kreatifdigital',
    tiktok: '@kreatifdigital'
  }
];

export const seedUsers = async () => {
  try {
    // Hash passwords
    const hashedUsers = await Promise.all(
      users.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      }))
    );

    // Create users
    await User.bulkCreate(hashedUsers);
    console.log('✅ Users seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding users:', error);
    throw error; // Re-throw error untuk debugging
  }
};

export default seedUsers; 