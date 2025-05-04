import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';
import Kota from './Kota.js';

const Kecamatan = sequelize.define('Kecamatan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nama_kecamatan: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_kota: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Kota,
      key: 'id'
    }
  }
}, {
  tableName: 'kecamatan',
  timestamps: false
});

export default Kecamatan; 