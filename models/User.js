const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

// require bcrypt

class User extends Model {
    // method for checking the password
}

User.init({
    username: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 8
        }
    }
}, {
    //  hooks for beforeCreate and beforeUpdate
    sequelize: db,
    modelName: 'user',
    freezeTableName: true
    // timestamps: true
});

module.exports = User;