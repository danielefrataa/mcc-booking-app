import express from 'express';
import { Kecamatan, Kota } from '../models/index.js';

const router = express.Router();

// Get all districts
router.get('/', async (req, res) => {
  try {
    const districts = await Kecamatan.findAll({
      include: [{
        model: Kota,
        attributes: ['id', 'nama_kota']
      }]
    });
    res.json(districts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get districts by city ID
router.get('/kota/:kotaId', async (req, res) => {
  try {
    const districts = await Kecamatan.findAll({
      where: { id_kota: req.params.kotaId },
      include: [{
        model: Kota,
        attributes: ['id', 'nama_kota']
      }]
    });
    res.json(districts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get district by ID
router.get('/:id', async (req, res) => {
  try {
    const district = await Kecamatan.findByPk(req.params.id, {
      include: [{
        model: Kota,
        attributes: ['id', 'nama_kota']
      }]
    });
    if (!district) {
      return res.status(404).json({ message: 'District not found' });
    }
    res.json(district);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new district
router.post('/', async (req, res) => {
  try {
    const { nama_kecamatan, id_kota } = req.body;
    if (!nama_kecamatan || !id_kota) {
      return res.status(400).json({ message: 'District name and city ID are required' });
    }
    
    // Check if city exists
    const city = await Kota.findByPk(id_kota);
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }

    const district = await Kecamatan.create({ nama_kecamatan, id_kota });
    res.status(201).json(district);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update district
router.put('/:id', async (req, res) => {
  try {
    const { nama_kecamatan, id_kota } = req.body;
    if (!nama_kecamatan || !id_kota) {
      return res.status(400).json({ message: 'District name and city ID are required' });
    }

    // Check if city exists
    const city = await Kota.findByPk(id_kota);
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }

    const district = await Kecamatan.findByPk(req.params.id);
    if (!district) {
      return res.status(404).json({ message: 'District not found' });
    }

    await district.update({ nama_kecamatan, id_kota });
    res.json(district);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete district
router.delete('/:id', async (req, res) => {
  try {
    const district = await Kecamatan.findByPk(req.params.id);
    if (!district) {
      return res.status(404).json({ message: 'District not found' });
    }
    await district.destroy();
    res.json({ message: 'District deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 