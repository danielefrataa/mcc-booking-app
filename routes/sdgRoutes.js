import express from 'express';
import { SDG } from '../models/index.js';

const router = express.Router();

// Get all SDGs
router.get('/', async (req, res) => {
  try {
    const sdgs = await SDG.findAll();
    res.json(sdgs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get SDG by ID
router.get('/:id', async (req, res) => {
  try {
    const sdg = await SDG.findByPk(req.params.id);
    if (!sdg) {
      return res.status(404).json({ message: 'SDG not found' });
    }
    res.json(sdg);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new SDG
router.post('/', async (req, res) => {
  try {
    const { nama_sdg, deskripsi } = req.body;
    if (!nama_sdg) {
      return res.status(400).json({ message: 'SDG name is required' });
    }
    const sdg = await SDG.create({ nama_sdg, deskripsi });
    res.status(201).json(sdg);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update SDG
router.put('/:id', async (req, res) => {
  try {
    const { nama_sdg, deskripsi } = req.body;
    if (!nama_sdg) {
      return res.status(400).json({ message: 'SDG name is required' });
    }
    const sdg = await SDG.findByPk(req.params.id);
    if (!sdg) {
      return res.status(404).json({ message: 'SDG not found' });
    }
    await sdg.update({ nama_sdg, deskripsi });
    res.json(sdg);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete SDG
router.delete('/:id', async (req, res) => {
  try {
    const sdg = await SDG.findByPk(req.params.id);
    if (!sdg) {
      return res.status(404).json({ message: 'SDG not found' });
    }
    await sdg.destroy();
    res.json({ message: 'SDG deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 