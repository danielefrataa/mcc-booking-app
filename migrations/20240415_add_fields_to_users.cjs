'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'tipe_user', {
      type: Sequelize.ENUM('personal', 'instansi'),
      allowNull: false,
      defaultValue: 'personal'
    });
    await queryInterface.addColumn('users', 'logo', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'nama_instansi', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'website', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'deskripsi', { type: Sequelize.TEXT });
    await queryInterface.addColumn('users', 'id_kategori', { type: Sequelize.INTEGER });
    await queryInterface.addColumn('users', 'id_subsektor', { type: Sequelize.INTEGER });
    await queryInterface.addColumn('users', 'id_kota', { type: Sequelize.INTEGER });
    await queryInterface.addColumn('users', 'id_kecamatan', { type: Sequelize.INTEGER });
    await queryInterface.addColumn('users', 'facebook', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'instagram', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'twitter', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'tiktok', { type: Sequelize.STRING });
    await queryInterface.addColumn('users', 'youtube', { type: Sequelize.STRING });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'tipe_user');
    await queryInterface.removeColumn('users', 'logo');
    await queryInterface.removeColumn('users', 'nama_instansi');
    await queryInterface.removeColumn('users', 'website');
    await queryInterface.removeColumn('users', 'deskripsi');
    await queryInterface.removeColumn('users', 'id_kategori');
    await queryInterface.removeColumn('users', 'id_subsektor');
    await queryInterface.removeColumn('users', 'id_kota');
    await queryInterface.removeColumn('users', 'id_kecamatan');
    await queryInterface.removeColumn('users', 'facebook');
    await queryInterface.removeColumn('users', 'instagram');
    await queryInterface.removeColumn('users', 'twitter');
    await queryInterface.removeColumn('users', 'tiktok');
    await queryInterface.removeColumn('users', 'youtube');
  }
}; 


