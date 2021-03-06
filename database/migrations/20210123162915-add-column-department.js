'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'department',
        'unity_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'unity', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('department','unity_id'),
    ])
  }
};
