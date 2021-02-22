'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'activity_record',
        'start',
        {
          type: Sequelize.STRING,
          allowNull: false,
        }),

      queryInterface.addColumn(
        'activity_record',
        'end',
        {
          type: Sequelize.STRING,
          allowNull: false,
        })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('activity_record','start'),
      queryInterface.removeColumn('activity_record','end')
    ])
  }
};
