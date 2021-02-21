const {Model, DataTypes} = require('sequelize')

class Calendar extends Model{
 
    static init(sequelize) {
        super.init({
          name: DataTypes.STRING,
          period: DataTypes.STRING,
        }, {
            sequelize,
            modelName: 'Calendar',
            tableName: 'calendar',
            timestamps: false
        })
      }
}

module.exports = Calendar
