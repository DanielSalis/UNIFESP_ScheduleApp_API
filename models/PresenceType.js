const {Model, DataTypes, Sequelize} = require('sequelize')

class PreseneceType extends Model{
 
    static init(sequelize) {
        super.init({
          type: DataTypes.STRING,
          sigla: DataTypes.STRING         
          
        }, {
            sequelize,
            modelName: 'PreseneceType',
            tableName: 'presence_type',
            timestamps: false
        })
      }
}

module.exports = PreseneceType
