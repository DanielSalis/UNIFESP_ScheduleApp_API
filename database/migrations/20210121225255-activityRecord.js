'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('activity_record', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      start: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      end: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      current_schedule_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('activity_record');
  }
};
