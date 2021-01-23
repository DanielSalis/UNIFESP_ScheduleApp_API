const {Model, DataTypes, Sequelize} = require('sequelize')

class Department extends Model{
 
    static init(sequelize) {
        super.init({
          type: DataTypes.STRING,          
          
        }, {
            sequelize,
            modelName: 'Department',
            tableName: 'department'
        })
      }

    static associate(models) {
      this.hasMany(models.User, { foreignKey: 'user_id'});
    }
}

module.exports = Department
