'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('activity_record','end')
    ])
},
  down: async (queryInterface, Sequelize) => {

  }
};
