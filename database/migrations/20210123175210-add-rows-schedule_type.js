'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('schedule_type',[
      {
        type:'6 horas',
      },
      {
        type:'8 horas',
      },
      {
        type:'10 horas',
      },
      {
        type:'12 horas',
      },
      {
        type:'15 horas',
      },
      {
        type:'18 horas',
      },
      {
        type:'20 horas',
      },
      {
        type:'24 horas',
      },
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
