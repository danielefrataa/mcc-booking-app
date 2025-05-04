import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const Kategori = sequelize.define('Kategori', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nama_kategori: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'kategori',
  timestamps: false
});

export default Kategori; 