import express from 'express';
const router = express.Router();
import { Op } from 'sequelize';
import Booking from '../models/Booking.js';

// POST endpoint for creating a booking
router.post('/', async (req, res) => {
  try {
    // Ambil data dari body
    const {
      id_ruangan,
      id_user,
      tanggal_mulai,
      tanggal_selesai,
      tujuan,
      jumlah_peserta,
      nama_event,
      kategori_event,
      kategori_ekraf,
      deskripsi_event,
      peralatan,
      nama_pic,
      no_pic,
      jenis_event,
      proposal,
      banner
    } = req.body;

    // Validasi field wajib
    if (
      !id_ruangan || !id_user || !tanggal_mulai || !tanggal_selesai ||
      !tujuan || !jumlah_peserta || !nama_event || !kategori_event ||
      !nama_pic || !no_pic || !jenis_event
    ) {
      return res.status(400).json({
        message: 'Field wajib tidak boleh kosong'
      });
    }

    // Generate kode_booking otomatis
    const dateStr = new Date(tanggal_mulai).toISOString().slice(0, 10).replace(/-/g, '');
    const count = await Booking.count({
      where: {
        tanggal_mulai: {
          [Op.gte]: new Date(`${dateStr.slice(0,4)}-${dateStr.slice(4,6)}-${dateStr.slice(6,8)}T00:00:00Z`),
          [Op.lt]: new Date(`${dateStr.slice(0,4)}-${dateStr.slice(4,6)}-${dateStr.slice(6,8)}T23:59:59Z`)
        }
      }
    });
    const kode_booking = `BK-${dateStr}-${String(count + 1).padStart(3, '0')}`;

    // Buat booking baru
    const booking = await Booking.create({
      id_ruangan,
      id_user,
      tanggal_mulai,
      tanggal_selesai,
      tujuan,
      jumlah_peserta,
      nama_event,
      kategori_event,
      kategori_ekraf,
      deskripsi_event,
      peralatan,
      nama_pic,
      no_pic,
      jenis_event,
      proposal,
      banner,
      kode_booking
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// GET endpoint for fetching bookings
router.get('/', async (req, res) => {
  try {
    // Get query parameters for filtering (optional)
    const { id_user, id_ruangan, tanggal_mulai, tanggal_selesai } = req.query;
    
    // Build where clause for filtering
    const whereClause = {};
    if (id_user) whereClause.id_user = id_user;
    if (id_ruangan) whereClause.id_ruangan = id_ruangan;
    if (tanggal_mulai) whereClause.tanggal_mulai = { [Op.gte]: new Date(tanggal_mulai) };
    if (tanggal_selesai) whereClause.tanggal_selesai = { [Op.lte]: new Date(tanggal_selesai) };

    // Get all bookings with optional filters
    const bookings = await Booking.findAll({
      where: whereClause,
      order: [['tanggal_mulai', 'ASC']] // Order by start date ascending
    });

    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// GET endpoint for fetching a single booking by ID
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking tidak ditemukan' });
    }

    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

export default router;