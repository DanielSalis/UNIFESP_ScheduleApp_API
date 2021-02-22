'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('activity_record','user_id')
    ])
},
  down: async (queryInterface, Sequelize) => {

  }
};
