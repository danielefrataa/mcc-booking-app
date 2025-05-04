import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';
import Ruangan from './Ruangan.js';

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  kode_booking: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nama_event: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kategori_event: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kategori_ekraf: {
    type: DataTypes.STRING,
    allowNull: true
  },
  deskripsi_event: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  peralatan: {
    type: DataTypes.STRING,
    allowNull: true
  },
  jumlah_peserta: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nama_pic: {
    type: DataTypes.STRING,
    allowNull: false
  },
  no_pic: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jenis_event: {
    type: DataTypes.STRING,
    allowNull: false
  },
  proposal: {
    type: DataTypes.STRING,
    allowNull: true
  },
  banner: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tanggal_mulai: {
    type: DataTypes.DATE,
    allowNull: false
  },
  tanggal_selesai: {
    type: DataTypes.DATE,
    allowNull: false
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_ruangan: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Ruangan,
      key: 'id'
    }
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected', 'cancelled'),
    allowNull: false,
    defaultValue: 'pending'
  }
}, {
  tableName: 'booking',
  timestamps: true
});

Booking.belongsTo(Ruangan, { foreignKey: 'id_ruangan' });

export default Booking; 