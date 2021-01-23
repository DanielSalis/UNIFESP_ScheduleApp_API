'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'activity_record',
        'presence_type_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'profile', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }),

      queryInterface.addColumn(
        'activity_record',
        'user_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'schedule_type', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('activity_record','presence_type_id'),
      queryInterface.removeColumn('activity_record','user_id')
    ])
  }
};
