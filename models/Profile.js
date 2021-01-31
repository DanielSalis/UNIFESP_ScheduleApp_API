const {Model, DataTypes, Sequelize} = require('sequelize')

class Profile extends Model{
 
    static init(sequelize) {
        super.init({
          type: DataTypes.STRING,          
          
        }, {
            sequelize,
            modelName: 'Profile',
            tableName: 'profile',
            timestamps: false
        })
      }
}

module.exports = Profile
