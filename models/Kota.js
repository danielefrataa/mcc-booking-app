import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const Kota = sequelize.define('Kota', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama_kota: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'kota',
  timestamps: true
});

export default Kota; 