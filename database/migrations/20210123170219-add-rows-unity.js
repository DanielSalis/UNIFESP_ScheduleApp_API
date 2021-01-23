'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('unity', [
      {
        name:'Zona sul',
        adress:'Avenida Andrômeda, 1998'
      },
      {
        name:'Centro',
        adress:'Avenida paraibuna, 8991'
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
