const Sequelize = require('sequelize');
const dbConfig  = require('../config/database');

const User = require('../models/User');

const Connection = new Sequelize(dbConfig);

User.init(Connection);

module.exports = Connection;

