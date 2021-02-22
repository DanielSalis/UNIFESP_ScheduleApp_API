'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'activity_record',
        'user_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'user', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('activity_record','user_id'),
    ])
  }
};
