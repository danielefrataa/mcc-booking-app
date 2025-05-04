import express from 'express';
import kotaRoutes from './kotaRoutes.js';
import kecamatanRoutes from './kecamatanRoutes.js';
import kategoriRoutes from './kategoriRoutes.js';
import subsektorRoutes from './subsektorRoutes.js';
import ruanganRoutes from './ruanganRoutes.js';
import bookingRoutes from './bookingRoutes.js';
import sdgRoutes from './sdgRoutes.js';
import subsektorSdgRoutes from './subsektorSdgRoutes.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

// Mount routes
router.use('/kota', kotaRoutes);
router.use('/kecamatan', kecamatanRoutes);
router.use('/kategori', kategoriRoutes);
router.use('/subsektor', subsektorRoutes);
router.use('/ruangan', ruanganRoutes);
router.use('/booking', bookingRoutes);
router.use('/sdg', sdgRoutes);
router.use('/subsektor-sdg', subsektorSdgRoutes);
router.use('/users', userRoutes);

export default router; 