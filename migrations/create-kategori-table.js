import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const createKategoriTable = async () => {
  try {
    await sequelize.getQueryInterface().createTable('kategori', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nama_kategori: {
        type: DataTypes.STRING,
        allowNull: false
      },
      deskripsi: {
        type: DataTypes.TEXT,
        allowNull: true
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
    console.log('Kategori table created successfully');
  } catch (error) {
    console.error('Error creating kategori table:', error);
  }
};

createKategoriTable(); 