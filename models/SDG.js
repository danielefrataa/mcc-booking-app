import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const SDG = sequelize.define('SDG', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  nama_sdg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  deskripsi: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'sdg',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default SDG; 