'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'user',
        'profile_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'profile', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }),

      queryInterface.addColumn(
        'user',
        'schedule_type_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'schedule_type', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }),

        queryInterface.addColumn(
          'user',
          'department_id',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {model: 'department', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }),

        queryInterface.addColumn(
          'user',
          'vacation_type_id',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {model: 'vacation_type', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }),

        queryInterface.addColumn(
          'user',
          'activity_record_id',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {model: 'activity_record', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }) 
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('user','profile_id'),
      queryInterface.removeColumn('user','schedule_type_id'),
      queryInterface.removeColumn('user','department_id'),
      queryInterface.removeColumn('user','vacation_type_id'),
      queryInterface.removeColumn('user','activity_record_id'),
    ])
  }
};
