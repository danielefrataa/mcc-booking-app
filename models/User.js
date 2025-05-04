import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tipe_user: {
    type: DataTypes.ENUM('personal', 'instansi'),
    allowNull: false,
    defaultValue: 'personal'
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
    allowNull: true,
    references: {
      model: 'kategori',
      key: 'id'
    }
  },
  id_subsektor: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'sub_sektor',
      key: 'id'
    }
  },
  id_kota: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'kota',
      key: 'id'
    }
  },
  id_kecamatan: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'kecamatan',
      key: 'id'
    }
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
  }
}, {
  tableName: 'users',
  timestamps: true
});

export default User;
