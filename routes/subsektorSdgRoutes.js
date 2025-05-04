import express from 'express';
import { SubsektorSDG, SubSektor, SDG } from '../models/index.js';

const router = express.Router();

// Get all subsektor-sdg relationships
router.get('/', async (req, res) => {
  try {
    const relationships = await SubsektorSDG.findAll({
      include: [
        {
          model: SubSektor,
          attributes: ['id', 'nama_subsektor']
        },
        {
          model: SDG,
          attributes: ['id', 'nama_sdg', 'deskripsi']
        }
      ]
    });
    res.json(relationships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get subsektor-sdg relationships by subsektor ID
router.get('/subsektor/:subsektorId', async (req, res) => {
  try {
    const relationships = await SubsektorSDG.findAll({
      where: { id_subsektor: req.params.subsektorId },
      include: [
        {
          model: SubSektor,
          attributes: ['id', 'nama_subsektor']
        },
        {
          model: SDG,
          attributes: ['id', 'nama_sdg', 'deskripsi']
        }
      ]
    });
    res.json(relationships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get subsektor-sdg relationships by SDG ID
router.get('/sdg/:sdgId', async (req, res) => {
  try {
    const relationships = await SubsektorSDG.findAll({
      where: { id_sdg: req.params.sdgId },
      include: [
        {
          model: SubSektor,
          attributes: ['id', 'nama_subsektor']
        },
        {
          model: SDG,
          attributes: ['id', 'nama_sdg', 'deskripsi']
        }
      ]
    });
    res.json(relationships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new subsektor-sdg relationship
router.post('/', async (req, res) => {
  try {
    const { id_subsektor, id_sdg } = req.body;
    if (!id_subsektor || !id_sdg) {
      return res.status(400).json({ message: 'Subsektor ID and SDG ID are required' });
    }

    // Check if subsektor exists
    const subsektor = await SubSektor.findByPk(id_subsektor);
    if (!subsektor) {
      return res.status(404).json({ message: 'Subsektor not found' });
    }

    // Check if SDG exists
    const sdg = await SDG.findByPk(id_sdg);
    if (!sdg) {
      return res.status(404).json({ message: 'SDG not found' });
    }

    // Check if relationship already exists
    const existingRelationship = await SubsektorSDG.findOne({
      where: { id_subsektor, id_sdg }
    });
    if (existingRelationship) {
      return res.status(400).json({ message: 'This relationship already exists' });
    }

    const relationship = await SubsektorSDG.create({ id_subsektor, id_sdg });
    res.status(201).json(relationship);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete subsektor-sdg relationship
router.delete('/:id', async (req, res) => {
  try {
    const relationship = await SubsektorSDG.findByPk(req.params.id);
    if (!relationship) {
      return res.status(404).json({ message: 'Relationship not found' });
    }
    await relationship.destroy();
    res.json({ message: 'Relationship deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 