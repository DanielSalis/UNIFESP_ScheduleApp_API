'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('activity_record','current_schedule_type')
    ])
},
  down: async (queryInterface, Sequelize) => {

  }
};
