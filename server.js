import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/sequelize.config.js';
import authRoutes from './routes/authRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js';
import subsektorRoutes from './routes/subsektorRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import User from './models/User.js';
import Kategori from './models/Kategori.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', router);
app.use('/api/subsektor', subsektorRoutes);
app.use('/api/booking', bookingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Start server
sequelize.sync()
  .then(() => {
    console.log('✅ Database connected!');
    User.belongsTo(Kategori, { foreignKey: 'id_kategori' });
    Kategori.hasMany(User, { foreignKey: 'id_kategori' });
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ Database error:', err));