const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 8
        }
    }
}, {
    sequelize: db,
    modelName: 'user',
    // timestamps: true
});

module.exports = User;