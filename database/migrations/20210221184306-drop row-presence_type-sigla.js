'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.removeColumn('presence_type','sigla')])
    },
  down: async (queryInterface, Sequelize) => {

  }
};
