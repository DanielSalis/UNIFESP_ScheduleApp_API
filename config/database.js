require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'schedule_app',
    define: {
      timestamps: true,
      underscored: true,
    },
  };