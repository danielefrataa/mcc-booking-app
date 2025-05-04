import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';
import Kategori from './Kategori.js';

const SubSektor = sequelize.define('SubSektor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nama_sub_sektor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_kategori: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Kategori,
      key: 'id'
    }
  }
}, {
  tableName: 'sub_sektor',
  timestamps: false
});

export default SubSektor; 