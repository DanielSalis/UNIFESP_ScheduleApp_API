const {Model, DataTypes, Sequelize} = require('sequelize')

class ScheduleType extends Model{
 
    static init(sequelize) {
        super.init({
          type: DataTypes.STRING,          
          
        }, {
            sequelize,
            modelName: 'ScheduleType',
            tableName: 'schedule-type'
        })
      }

    static associate(models) {
      this.hasMany(models.User, { foreignKey: 'user_id'});
    }
}

module.exports = ScheduleType
