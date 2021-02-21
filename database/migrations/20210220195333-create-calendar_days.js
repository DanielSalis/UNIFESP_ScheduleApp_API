'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('calendar_days', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      weekendDay:{
        type: Sequelize.STRING,
        allowNull: false
      },
      shortDate:{
        type: Sequelize.STRING,
        allowNull: false
      },
      fullDate:{
        type: Sequelize.STRING,
        allowNull: false
      },
      calendar_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'calendar', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('calendar_days');
  }
};
