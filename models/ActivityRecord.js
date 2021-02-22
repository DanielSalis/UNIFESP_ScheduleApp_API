const {Model, DataTypes} = require('sequelize')

class ActivityRecord extends Model{
 
    static init(sequelize) {
        super.init({
          presence_type_id: DataTypes.INTEGER,
          user_id: DataTypes.INTEGER,
          start:DataTypes.STRING,
          end:DataTypes.STRING
        }, {
            sequelize,
            modelName: 'ActivityRecord',
            tableName: 'activity_record',
            timestamps: false,
            underscore: false
        })
      }

      static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id'});
    }
}

module.exports = ActivityRecord
