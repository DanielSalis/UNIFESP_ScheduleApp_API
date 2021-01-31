const {Model, DataTypes, Sequelize} = require('sequelize')

class Department extends Model{
 
    static init(sequelize) {
        super.init({
          name: DataTypes.STRING,
          unity_id: DataTypes.NUMBER       
          
        }, {
            sequelize,
            modelName: 'Department',
            tableName: 'department',
            timestamps: false
        })
      }

    static associate(models) {
      this.hasMany(models.User, { foreignKey: 'user_id'});
      this.belongsTo(models.Unity, {foreignKey: 'unity_id'});
    }
}

module.exports = Department
