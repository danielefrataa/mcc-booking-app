import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const createUsersTable = async () => {
  try {
    await sequelize.getQueryInterface().createTable('users', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      tipe_user: {
        type: DataTypes.ENUM('personal', 'instansi'),
        allowNull: false
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telp: {
        type: DataTypes.STRING,
        allowNull: true
      },
      alamat: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      nama_instansi: {
        type: DataTypes.STRING,
        allowNull: true
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true
      },
      deskripsi: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      id_kategori: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      id_subsektor: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      id_kota: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      id_kecamatan: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      facebook: {
        type: DataTypes.STRING,
        allowNull: true
      },
      instagram: {
        type: DataTypes.STRING,
        allowNull: true
      },
      twitter: {
        type: DataTypes.STRING,
        allowNull: true
      },
      tiktok: {
        type: DataTypes.STRING,
        allowNull: true
      },
      youtube: {
        type: DataTypes.STRING,
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
    console.log('Users table created successfully');
  } catch (error) {
    console.error('Error creating users table:', error);
  }
};

createUsersTable(); 