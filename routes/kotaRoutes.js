import express from 'express';
import { Kota } from '../models/index.js';

const router = express.Router();

// Get all cities
router.get('/', async (req, res) => {
  try {
    const cities = await Kota.findAll();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get city by ID
router.get('/:id', async (req, res) => {
  try {
    const city = await Kota.findByPk(req.params.id);
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }
    res.json(city);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new city
router.post('/', async (req, res) => {
  try {
    const { nama_kota } = req.body;
    if (!nama_kota) {
      return res.status(400).json({ message: 'City name is required' });
    }
    const city = await Kota.create({ nama_kota });
    res.status(201).json(city);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update city
router.put('/:id', async (req, res) => {
  try {
    const { nama_kota } = req.body;
    if (!nama_kota) {
      return res.status(400).json({ message: 'City name is required' });
    }
    const city = await Kota.findByPk(req.params.id);
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }
    await city.update({ nama_kota });
    res.json(city);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete city
router.delete('/:id', async (req, res) => {
  try {
    const city = await Kota.findByPk(req.params.id);
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }
    await city.destroy();
    res.json({ message: 'City deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 