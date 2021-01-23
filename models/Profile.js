const {Model, DataTypes, Sequelize} = require('sequelize')

class Profile extends Model{
 
    static init(sequelize) {
        super.init({
          type: DataTypes.STRING,          
          
        }, {
            sequelize,
            modelName: 'Profile',
            tableName: 'profile'
        })
      }

    static associate(models) {
      this.hasMany(models.User, { foreignKey: 'user_id'});
    }
}

module.exports = Profile
