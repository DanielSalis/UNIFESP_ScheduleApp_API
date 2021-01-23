'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('presence_type',[
      {
        type:'Normal',
      },
      {
        type:'Substituiu - Folga',
      },
      {
        type:'Substituiu - Falta',
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
