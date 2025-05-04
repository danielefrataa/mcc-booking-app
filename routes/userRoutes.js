import express from 'express';
import { User, Kategori, SubSektor, Kota, Kecamatan } from '../models/index.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Kategori,
          attributes: ['id', 'nama_kategori']
        },
        {
          model: SubSektor,
          attributes: ['id', 'nama_sub_sektor']
        },
        {
          model: Kota,
          attributes: ['id', 'nama_kota']
        },
        {
          model: Kecamatan,
          attributes: ['id', 'nama_kecamatan']
        }
      ]
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        {
          model: Kategori,
          attributes: ['id', 'nama_kategori']
        },
        {
          model: SubSektor,
          attributes: ['id', 'nama_sub_sektor']
        },
        {
          model: Kota,
          attributes: ['id', 'nama_kota']
        },
        {
          model: Kecamatan,
          attributes: ['id', 'nama_kecamatan']
        }
      ]
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new user
router.post('/', async (req, res) => {
  try {
    const {
      tipe_user,
      nama,
      email,
      password,
      telp,
      alamat,
      logo,
      nama_instansi,
      website,
      deskripsi,
      id_kategori,
      id_subsektor,
      id_kota,
      id_kecamatan,
      facebook,
      instagram,
      twitter,
      tiktok,
      youtube
    } = req.body;

    // Validate required fields
    if (!nama || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      tipe_user,
      nama,
      email,
      password: hashedPassword,
      telp,
      alamat,
      logo,
      nama_instansi,
      website,
      deskripsi,
      id_kategori,
      id_subsektor,
      id_kota,
      id_kecamatan,
      facebook,
      instagram,
      twitter,
      tiktok,
      youtube
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user
router.put('/:id', async (req, res) => {
  try {
    const {
      tipe_user,
      nama,
      email,
      password,
      telp,
      alamat,
      logo,
      nama_instansi,
      website,
      deskripsi,
      id_kategori,
      id_subsektor,
      id_kota,
      id_kecamatan,
      facebook,
      instagram,
      twitter,
      tiktok,
      youtube
    } = req.body;

    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if email is being changed and if it already exists
    if (email && email !== user.email) {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
    }

    // Hash new password if provided
    let hashedPassword = user.password;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    await user.update({
      tipe_user,
      nama,
      email,
      password: hashedPassword,
      telp,
      alamat,
      logo,
      nama_instansi,
      website,
      deskripsi,
      id_kategori,
      id_subsektor,
      id_kota,
      id_kecamatan,
      facebook,
      instagram,
      twitter,
      tiktok,
      youtube
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user.toJSON();
    res.json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;