'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('department',[
      {
        name:'Piso superior 01',
        unity_id: '1'
      },
      {
        name:'Piso superior 02',
        unity_id: '1'
      },
      {
        name:'Piso superior 03',
        unity_id: '1'
      },
      {
        name:'Piso Térreo A',
        unity_id: '2'
      },
      {
        name:'Piso Térreo B',
        unity_id: '2'
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
