require('dotenv').config();

module.exports = {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: String(process.env.DB_USERNAME),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DATABASE_NAME),
    define: {
      timestamps: true,
      underscored: true,
    },
  };