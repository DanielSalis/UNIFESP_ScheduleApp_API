const {Model, DataTypes} = require('sequelize')

class CalendarDays extends Model{
 
    static init(sequelize) {
        super.init({
            weekendDay: DataTypes.STRING,
            shortDate: DataTypes.STRING,
            fullDate: DataTypes.STRING,
            calendar_id: DataTypes.STRING,
        }, {
            sequelize,
            modelName: 'CalendarDays',
            tableName: 'calendar_days',
            timestamps: false,
            underscored: false
        })
      }
    static associate(models) {
        this.belongsTo(models.Calendar, { foreignKey: 'calendar_id'});
    }
}

module.exports = CalendarDays
