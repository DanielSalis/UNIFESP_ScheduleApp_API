const Sequelize = require('sequelize');
const dbConfig  = require('../config/database');

const User = require('../models/User');
const Profile = require('../models/Profile');
const Department = require('../models/Department');
const ScheduleType = require('../models/ScheduleType');
const VacationType = require('../models/VacationType');

const Connection = new Sequelize(dbConfig);

User.init(Connection);
Profile.init(Connection);
Department.init(Connection);
ScheduleType.init(Connection);
VacationType.init(Connection);


User.associate(Connection.models);
// Profile.associate(Connection.models);
// Department.associate(Connection.models);
// ScheduleType.associate(Connection.models);
// VacationType.associate(Connection.models);

module.exports = Connection;

