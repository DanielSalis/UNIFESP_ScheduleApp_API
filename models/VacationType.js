const {Model, DataTypes, Sequelize} = require('sequelize')

class VacationType extends Model{
 
    static init(sequelize) {
        super.init({
          type: DataTypes.STRING,          
          
        }, {
            sequelize,
            modelName: 'VacationType',
            tableName: 'vacation-type'
        })
      }

    static associate(models) {
      this.hasMany(models.User, { foreignKey: 'user_id'});
    }
}

module.exports = VacationType
