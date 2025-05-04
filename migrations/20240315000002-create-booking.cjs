'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('booking', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      kode_booking: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false
      },
      nama_event: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nama_organisasi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kategori_event: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kategori_ekraf: {
        type: Sequelize.STRING,
        allowNull: true
      },
      jenis_event: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ruangan_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ruangan',
          key: 'id'
        }
      },
      lantai: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      waktu_mulai: {
        type: Sequelize.TIME,
        allowNull: false
      },
      waktu_selesai: {
        type: Sequelize.TIME,
        allowNull: false
      },
      nama_pic: {
        type: Sequelize.STRING,
        allowNull: false
      },
      no_pic: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('pending', 'approved', 'rejected'),
        allowNull: false,
        defaultValue: 'pending'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('booking');
  }
}; 