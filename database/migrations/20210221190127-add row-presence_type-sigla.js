'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'presence_type',
        'sigla',
        {
          type: Sequelize.STRING,
        })
    ])
  },

  down: async (queryInterface, Sequelize) => {

  }
};
