const {Model, DataTypes, Sequelize} = require('sequelize')
// const dbConnection = require('../config/database');
// //const sequelize = new Sequelize(dbConnection);

class User extends Model{
 
    static init(sequelize) {
        super.init({
          name: DataTypes.STRING,
          last_name: DataTypes.STRING,
          email: DataTypes.STRING,
          password: DataTypes.STRING,
          
        }, {
            sequelize,
            modelName: 'User',
            tableName: 'user'
        })
      }

    static associate(models) {
      this.belongsTo(models.Profile, { foreignKey: 'profile_id' });
      this.belongsTo(models.ScheduleType, { foreignKey: 'schedule_type_id'});
      this.belongsTo(models.Department, { foreignKey: 'department_id'});
      this.belongsTo(models.VacationType, { foreignKey: 'vacation_type_id'});
    }
}

module.exports = User
