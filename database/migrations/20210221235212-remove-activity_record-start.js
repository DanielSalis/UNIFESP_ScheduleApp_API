'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('activity_record','start')
    ])
},
  down: async (queryInterface, Sequelize) => {

  }
};
