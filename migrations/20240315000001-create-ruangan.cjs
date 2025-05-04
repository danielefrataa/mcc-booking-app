'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ruangan', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nama_ruangan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kapasitas: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ukuran: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      biaya_sewa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      detail_ruangan: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pic: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lantai: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fasilitas: {
        type: Sequelize.STRING,
        allowNull: true
      },
      gambar: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('ruangan');
  }
}; 