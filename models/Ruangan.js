import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const Ruangan = sequelize.define('Ruangan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nama_ruangan: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kapasitas: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'available'
  },
  ukuran: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  biaya_sewa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail_ruangan: {
    type: DataTypes.STRING,
    allowNull: true
  },
  pic: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lantai: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fasilitas: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gambar: {
    type: DataTypes.STRING,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  update_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'ruangan',
  timestamps: false
});

export default Ruangan; 