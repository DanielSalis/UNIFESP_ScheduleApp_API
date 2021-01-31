const {Model, DataTypes} = require('sequelize')

class Unity extends Model{
 
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,          
            adress: DataTypes.STRING
        }, {
            sequelize,
            modelName: 'Unity',
            tableName: 'unity',
            timestamps: false
        })
    }
}

module.exports = Unity
