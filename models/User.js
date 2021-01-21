const {Model, DataTypes, Sequelize} = require('sequelize')
// const dbConnection = require('../config/database');
// //const sequelize = new Sequelize(dbConnection);

class User extends Model{
 
    static init(sequelize) {
        super.init({
          name: DataTypes.STRING,
          last_name: DataTypes.STRING,
          email: DataTypes.STRING,
          password: DataTypes.STRING
          
        }, {
            sequelize,
            modelName: 'User',
            tableName: 'user'
        })
      }
    
}

module.exports = User
