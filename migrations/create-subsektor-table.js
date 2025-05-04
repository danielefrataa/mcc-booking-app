import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const createSubsektorTable = async () => {
  try {
    await sequelize.getQueryInterface().createTable('subsektor', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nama_subsektor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_kategori: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'kategori',
          key: 'id'
        }
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
    console.log('Subsektor table created successfully');
  } catch (error) {
    console.error('Error creating subsektor table:', error);
  }
};

createSubsektorTable(); 