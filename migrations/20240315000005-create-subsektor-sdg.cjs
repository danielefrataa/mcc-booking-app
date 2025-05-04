'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subsektor_sdg', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      id_subsektor: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'sub_sektor',
          key: 'id'
        }
      },
      id_sdg: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'sdg',
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('subsektor_sdg');
  }
}; 