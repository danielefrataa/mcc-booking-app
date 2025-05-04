import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const createKecamatanTable = async () => {
  try {
    await sequelize.getQueryInterface().createTable('kecamatan', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nama_kecamatan: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_kota: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'kota',
          key: 'id'
        }
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
    console.log('Kecamatan table created successfully');
  } catch (error) {
    console.error('Error creating kecamatan table:', error);
  }
};

createKecamatanTable(); 