import express from 'express';
import { Ruangan } from '../models/index.js';

const router = express.Router();

// Get all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await Ruangan.findAll();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get room by ID
router.get('/:id', async (req, res) => {
  try {
    const room = await Ruangan.findByPk(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new room
router.post('/', async (req, res) => {
  try {
    const { nama_ruangan, kapasitas, fasilitas, status } = req.body;
    if (!nama_ruangan || !kapasitas) {
      return res.status(400).json({ message: 'Room name and capacity are required' });
    }
    const room = await Ruangan.create({
      nama_ruangan,
      kapasitas,
      fasilitas,
      status: status || 'available'
    });
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update room
router.put('/:id', async (req, res) => {
  try {
    const { nama_ruangan, kapasitas, fasilitas, status } = req.body;
    if (!nama_ruangan || !kapasitas) {
      return res.status(400).json({ message: 'Room name and capacity are required' });
    }
    const room = await Ruangan.findByPk(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    await room.update({
      nama_ruangan,
      kapasitas,
      fasilitas,
      status: status || room.status
    });
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete room
router.delete('/:id', async (req, res) => {
  try {
    const room = await Ruangan.findByPk(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    await room.destroy();
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get available rooms
router.get('/status/available', async (req, res) => {
  try {
    const rooms = await Ruangan.findAll({
      where: { status: 'available' }
    });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 