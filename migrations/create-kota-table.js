import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const createKotaTable = async () => {
  try {
    await sequelize.getQueryInterface().createTable('kota', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nama_kota: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_provinsi: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    console.log('Kota table created successfully');
  } catch (error) {
    console.error('Error creating kota table:', error);
  }
};

createKotaTable(); 